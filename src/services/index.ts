import { pipe } from 'rxjs';
import { getUser } from './get-user';

const fetch = {
    getUser
};

const logger = f => ({
    getUser: () => {
        console.log('getting user');
        return f.getUser();
    }
});

export const services = pipe(logger)(fetch);
