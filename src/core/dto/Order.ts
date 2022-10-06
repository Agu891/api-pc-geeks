interface OrderItems {
  title: string;
  quantity: number;
  unitPrice: number;
  productsId: number;
}
export interface OrderRequestDto {
  userId: number;
  shippingDetails: {
    domicilio: string;
    localidad: string;
  };
  items: OrderItems[];
  shippingPrice: number;
  subtotal: number;
  total: number;
}

export interface OrderResponseDto {
  orderId: number;
  preferenceId: string;
  init_point: string;
}
