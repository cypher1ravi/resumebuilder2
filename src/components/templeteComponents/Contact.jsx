
import React from 'react';
import { useSelector } from 'react-redux';
export const Email = () => {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <>
            {personalInfo.email}

        </>
    );
};


export const Address = () => {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <>
            <span>{personalInfo.address}</span>
        </>
    );
};


export const Phone = () => {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <>

            <span>{personalInfo.phone}</span>

        </>
    );
};


