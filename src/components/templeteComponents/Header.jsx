import React from 'react';
import { useSelector } from 'react-redux';

export function Name() {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <>
            {personalInfo.firstName} {personalInfo.lastName}

        </>
    );
}

export function Title() {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <>
            {personalInfo.title}
        </>
    );
}

export function Summary() {
    const personalInfo = useSelector((state) => state.personalInformation);

    return (
        <>
            {personalInfo.objective}
        </>
    );
}
