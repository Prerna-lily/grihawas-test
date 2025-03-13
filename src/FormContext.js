import React, { createContext, useState, useCallback, useRef } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});
    // Use useRef to hold the latest formData value
    const formDataRef = useRef(formData);

    // Update the ref whenever formData changes
    React.useEffect(() => {
        formDataRef.current = formData;
    }, [formData]);

    const updateFormData = useCallback((newData) => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData, ...newData };
            return updatedFormData;
        });
    }, []);

    const contextValue = {
        formData: formDataRef.current, // Access formData through the ref
        updateFormData,
    };

    return (
        <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
    );
};