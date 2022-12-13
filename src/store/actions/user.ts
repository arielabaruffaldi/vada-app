import RNFS from 'react-native-fs';
import { SET_PROFILE_IMAGE } from '@store/types/user';


export const setProfileImage = (imageUri: string) => {
  return async (dispatch: any) => {
    const fileName = imageUri.split('/').pop();
    const Path = `file:///${RNFS.DocumentDirectoryPath}/${fileName}`;
    try {

      await RNFS.copyFile(imageUri, Path)
      dispatch({
          type: SET_PROFILE_IMAGE,
          payload: Path
      })
  } catch (e) {
      console.warn('catch fileName')
      console.log(e)
  }
  }
}
