import React from 'react'
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';


const Todo = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '25px'}}>
            <div>ben ilk todoyum</div>
            <div>
                <IoMdRemoveCircleOutline className='icons' style={{marginRight:'10px'}}/>
                <FaRegEdit className='icons'/>
            </div>
        </div>
    )
}

export default Todo