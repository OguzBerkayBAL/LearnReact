import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { useSelector } from 'react-redux';
const Loading = () => {

    const {loading} = useSelector((store)=>store.product);

    return (
        <div>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}  
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>

    )
}

export default Loading