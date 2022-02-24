import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {PhoneListContainer} from '../Phones';

const APPNavigation = () => {
    return (
        <Routes>
            <Route path="/" element={<PhoneListContainer />} />
        </Routes>
    )
}
export default APPNavigation;