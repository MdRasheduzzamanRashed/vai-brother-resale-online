import React from 'react';
import BrandCard from './BrandCard';

const Brand = () => {
    return (
        <div className=' grid grid-cols-3 gap-3'>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
        </div>
    );
};

export default Brand;