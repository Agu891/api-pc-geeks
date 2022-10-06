import { UserDto } from '../dto/Auth';

export default interface AuthRespository {
  getUserById(userId: number): Promise<UserDto | null>;
}
