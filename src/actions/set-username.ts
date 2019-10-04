import { SORT_FILTER } from 'constants.ts';

export const setUsername = (username: string) => ({
    type: SORT_FILTER,
    payload: {
        username
    }
});
