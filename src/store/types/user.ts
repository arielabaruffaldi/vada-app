export const SET_PROFILE_IMAGE = 'SET_PROFILE_IMAGE';


export interface SetProfileImage {
  type: typeof SET_PROFILE_IMAGE;
  payload: string;
}

export type UserActions = SetProfileImage;
