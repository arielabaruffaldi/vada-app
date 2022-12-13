import { SIGN_IN, SIGN_UP, } from '@store/types/auth';
import { URL_AUTH, URL_SIGN_IN } from '@utils/data/database';

export const signUp = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(URL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    dispatch({
      type: SIGN_UP,
      payload: {
        token: data.token,
        userId: data.localId,
      },
    });

    if (data.error) {
      throw new Error(data.error);
    }
  };
};


export const signIn = (email: string, password: string, handleError: any) => {
  return async (dispatch: any) => {
    const response = await fetch(URL_SIGN_IN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();

    if (data.error) {
      handleError(data.error.message);
      switch (data.error.message) {
        case "EMAIL_NOT_FOUND":
          return handleError("Email not found");
        default:
          return data.error.message;
      }
    } else {
      dispatch({
        type: SIGN_IN,
        payload: {
          token: data.idToken,
          userId: data.localId
        }
      });
    }
  }
}