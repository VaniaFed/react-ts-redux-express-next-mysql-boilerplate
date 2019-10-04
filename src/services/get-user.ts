import gql from 'graphql-tag';
import { client } from 'src/client';

const userQuery = gql`
    query($id: String!) {
        user(id: $id) @rest(type: "User", path: "/getUser") {
            id
            username
            password
        }
    }
`;

export const getUser = async () => {
    const user = await client().query({
        query: userQuery
    });
    return user;
};
