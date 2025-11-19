import React, { useContext } from 'react';
import { DataProvider } from './Provider/Provider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {focus}=useContext(DataProvider)
    if(focus){
        return children
    }
    return <Navigate to='/Login'></Navigate>
};

export default Privateroute;