import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';
import fetch from 'node-fetch';
import _ from 'lodash';

const httpLink = createHttpLink({
    uri: '/getUser',
    useGETForQueries: true,
    fetch
});
const cache = new InMemoryCache({
    dataIdFromObject: movie => movie.id || null
});

export const httpClient = () => new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache
});

const restLink = () => new RestLink({
    uri: '/getUser'
});

export const restClient = () => {
    return new ApolloClient({
        link: restLink(),
        cache
    });
};

const getClientWithNecessaryLink = () => typeof window === 'undefined' ? httpClient() : restClient();

export const client = _.memoize(getClientWithNecessaryLink);
