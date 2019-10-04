import React from 'react';
import { User } from 'containers/user';

const Sample = ({ match }) => {
    return <User match={match} />;
};
Sample.getInitialProps = ({ query }) => {
    const match = {
        params: query
    };
    return { match };
};

export default Sample;
