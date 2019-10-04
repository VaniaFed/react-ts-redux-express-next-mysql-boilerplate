import produce from 'immer';
import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from 'constants.ts';
import { User } from 'types/index'

interface UserState {
    user: User,
    error: string,
}

const initialState: UserState = {
    user: {},
    error: '',
};

export const user = (state = initialState, action): UserState => {
    const { type } = action;
    return produce(state, draft => {
        switch (type) {
            case FETCH_USER_SUCCESS: {
                draft.user = action.payload.user;
                break;
            }
            case FETCH_USER_ERROR: {
                draft.error = action.payload.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
