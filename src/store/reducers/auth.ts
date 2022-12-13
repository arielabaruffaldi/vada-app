import { AuthActions, SIGN_UP, SIGN_IN } from '@store/types/auth';

interface InitialState {
  token: string | null;
  userId: string | null;
}

const initialState: InitialState = {
  token: null,
  //TODO: uncomment this line 
  //userId: null,
  userId: 'asdasdasd',
};

const AuthReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

export default AuthReducer;
