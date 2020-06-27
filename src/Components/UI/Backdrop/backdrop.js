import React from 'react'
import './backdrop.css'

const backdrop = (props) =>{
    return (
       <div className='Backdrop' onClick={props.clicked}></div>
    );
}

export default backdrop;