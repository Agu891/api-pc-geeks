import { AuthLogin, AuthDto, AuthSignIn } from '../dto/Auth';
import AuthRespository from '../repositories/auth.repository';
import { Result } from '../types/response';
export const loginAuthInteractor =
  (authRepository: AuthRespository) =>
  async (dataLogin: AuthLogin): Promise<Result<AuthDto>> => {
    const authResponse = await authRepository.login(dataLogin);

    return authResponse;
  };

export const signinAuthInteractor =
  (authRepository: AuthRespository) =>
  async (dataSignin: AuthSignIn): Promise<Result<AuthDto>> => {
    const authResponse = await authRepository.signin(dataSignin);

    return authResponse;
  };
