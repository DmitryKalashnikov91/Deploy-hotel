import React, { useContext, useEffect, useState } from 'react';

const reviewContext = React.createContext();
export const useReview = () => {
    return useContext(reviewContext);
};
async function createReview(data) {
    console.log(data);
}

export const ReviewProvider = ({ children }) => {
    useEffect(() => {
        setReview(null);
    }, []);
    // const [isLoading, setLoading] = useState(true);
    const [reviews, setReview] = useState([]);
    // const [error, setError] = useState(null);

    return (
        <reviewContext.Provider value={{ reviews, createReview }}>
            {children}
        </reviewContext.Provider>
    );
};
