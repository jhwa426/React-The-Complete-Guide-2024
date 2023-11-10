import React from 'react'

const Input = ({ label, id, error, ...props }) => {
    return (
        <div className="control no-margin">
            <label htmlFor="id">Email</label>
            <input
                id={id}
                {...props}
            />
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default Input;