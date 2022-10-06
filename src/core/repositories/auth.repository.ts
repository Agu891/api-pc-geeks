import { AuthLogin, AuthSignIn, AuthDto } from '../dto/Auth';
import { Result } from '../types/response';
export default interface AuthRespository {
  login(login: AuthLogin): Promise<Result<AuthDto>>;
  signin(signin: AuthSignIn): Promise<Result<AuthDto>>;
}
