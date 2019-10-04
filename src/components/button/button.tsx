import React, { FC } from 'react';
import classNames from 'classnames';
import './button.scss';
import { Props } from './props';

export const Button: FC<Props> = ({ text, className, onClick }: Props) => {
    const resultClass = classNames(className, 'button');
    return (
        <button
            className={resultClass}
            onClick={onClick}
            type="button"
            data-button="search-page__button-search"
        >
            {text}
        </button>
    );
};
