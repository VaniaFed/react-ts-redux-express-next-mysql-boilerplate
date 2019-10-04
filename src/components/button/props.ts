import PropTypes, { InferProps } from 'prop-types';

const Types = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export type Props = InferProps<typeof Types>;
