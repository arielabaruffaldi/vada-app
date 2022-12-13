export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';


export interface SignUp {
  type: typeof SIGN_UP;
  payload: SignUpResponse;
}

export interface SignIn {
  type: typeof SIGN_IN;
  payload: SignInResponse;
}

interface SignUpResponse {
  token: string;
  userId: string;
}

interface SignInResponse {
  token: string;
  userId: string;
}

export type AuthActions = SignUp | SignIn;
