import React from 'react';

import { Link } from 'react-router-dom';

export const CSRLink = ({ children, as, href }) => (
    <Link to={as || href}>{children}</Link>
);
