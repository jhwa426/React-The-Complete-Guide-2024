import React from 'react'

const Button = ({ children, textOnly, className, ...props }) => {
    const cssClasses = textOnly ? `text-button ${className}` : "button";

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
}

export default Button;