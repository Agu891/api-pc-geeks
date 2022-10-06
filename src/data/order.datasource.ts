import { OrderRequestDto } from '../core/dto/Order';
import { Order, OrderItems } from '../core/entities/orders';
import OrderRepository from '../core/repositories/order.repository';
import { Result } from '../core/types/response';
import prisma from '../config/db';
import { ServerError } from '../errors/server-error';

export default class OrderDataSource implements OrderRepository {
  public async createOrder(data: OrderRequestDto): Promise<Result<Order>> {
    const state = await prisma.states.findUnique({
      where: {
        state: 'pending',
      },
    });
    if (!state) {
      return { success: false, err: new ServerError('Error en el servidor ') };
    }

    //mapeo de order items
    const oi: OrderItems[] = data.items.map((item) => {
      return {
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        productsId: item.productsId,
      };
    });

    try {
      const order: Order = await prisma.orders.create({
        data: {
          userId: data.userId,
          statusId: state.id,
          shippingprice: data.shippingPrice,
          subtotal: data.subtotal,
          total: data.total,
          OrderItems: {
            createMany: {
              data: [...oi],
            },
          },
          ShippingDetails: {
            create: {
              ...data.shippingDetails,
            },
          },
        },
      });

      return { success: true, result: order };
    } catch (error: any) {
      return { success: false, err: error };
    }
  }
}
