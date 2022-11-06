import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="h-14 btn bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
    );
};

export default PrimaryButton;