import React from 'react';

import Link from 'next/link';

export const SSRLink = ({ children, href, as }) => (
    <Link href={href} as={as}>
        <a>{children}</a>
    </Link>
);
