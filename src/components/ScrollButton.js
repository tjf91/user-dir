import React, { Component } from 'react'

export default function ScrollButton (props){   

        return(
                <div >
                    <button onClick={(index)=>{
                        if(props.currentIndex+2===props.len){
                            console.log(props.currentIndex,props.len)
                        }
                        return props.handleChangeIndex(props.currentIndex+props.direction)}} className="scrollbutton">{props.carrot}</button>
                </div>
            )

}