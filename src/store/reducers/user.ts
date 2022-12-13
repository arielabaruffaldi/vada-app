import { UserActions, SET_PROFILE_IMAGE } from '@store/types/user';

interface InitialState {
	profileImg: string | null;
}

const initialState: InitialState = {
	profileImg: null,
};

const UserReducer = (state = initialState, action: UserActions) => {
	switch (action.type) {
		case SET_PROFILE_IMAGE:
			console.log("ACTIONNNN", action)
			return {
				...state,
				profileImg: action.payload,
			};
		default:
			return state;
	}
};

export default UserReducer;
