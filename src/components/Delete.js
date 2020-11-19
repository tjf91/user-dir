import React from 'react'

export default function Delete (props){

    return(
        <button className='extraButtons' onClick={()=>props.handleDelete()}>DELETE</button>
    )
}