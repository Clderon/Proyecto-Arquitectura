import React from 'react';
import './Button.css';

export default function Button({
    children,
    onClick,
    variant = 'primary',
    ...props
}) {
    return (
        <button
            className={`button button--${variant}}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
