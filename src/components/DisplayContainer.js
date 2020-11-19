import React from 'react'
import { Component } from 'react';
import users from '../data'
import Delete from './Delete';
import DisplayData from './DisplayData';


export default class DisplayContainer extends Component {
    constructor() {
        super()
        this.state={            
            list:[...users],                    
        }
        this.handleDelete=this.handleDelete.bind(this)

    }

    handleDelete(index){
        const list=[...this.state.list]
        list.splice(index,1)
        this.setState({list})
        }

        componentDidUpdate(x,prev){
            if (this.state.list.length == prev.list.length)
            console.log('fafa')
            this.props.handleLen(this.state.list.length)
        }

    render(){
        const mapped = this.state.list.map((item,index)=>{
            return(
            <DisplayData
            list={this.state.list}
            first={item.name.first}
            last={item.name.last}
            city={item.city}
            title={item.title}
            employer={item.employer}
            favoriteMovies={item.favoriteMovies}
            index={index}
            key={item.id}
            lengthList={this.state.list.length}
            handleLen={this.props.handleLen}
            />)
            })
            
        return(
            <div>
            <div id='displayContainer'> 
                            {mapped[this.props.currentIndex]}
                           
             </div>
             <div className='divButtons'>
               <Delete list={this.state.list}
                        index={this.props.currentIndex}
                        handleDelete={this.handleDelete} />
          
             </div>
            

            </div>
            
        )
    }

}

