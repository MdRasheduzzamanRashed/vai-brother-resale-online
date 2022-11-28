import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const laptops = useLoaderData();
    return (
        <div>
            <h2>{ laptops.length} hi</h2>
        </div>
    );
};

export default Category;