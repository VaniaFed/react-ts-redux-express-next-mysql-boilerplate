import gql from 'graphql-tag';
import { client } from 'src/client';

const userQuery = gql`
    query {
        user @rest(type: "User", path: "getUser") {
            user
        }
    }
`;

export const getUser = async () => {
    const user = await client().query({
        query: userQuery
    });
    return user.data.user.user;
};
