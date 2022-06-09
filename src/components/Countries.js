import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((result) =>setData(result.data));
    }, []);

    return (
        <div className="countries">
            <h1>All countries</h1>
        </div>
    );
};

export default Countries;