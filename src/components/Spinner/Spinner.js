import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='flex justify-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#19D3AE', '#0FCFEC', '#F4442E', '#46c8f9', '#429EA6']}
            />
        </div>
    );
};

export default Spinner;