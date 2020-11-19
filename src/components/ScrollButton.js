import React, { Component } from 'react'

export default function ScrollButton (props){
       

        return(
                <div >
                    <button onClick={(index)=>props.handleChangeIndex(props.currentIndex+props.direction)} className="scrollbutton">{props.carrot}</button>
                </div>
            )

}