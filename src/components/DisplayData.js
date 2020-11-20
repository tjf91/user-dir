import React, { Component } from 'react'

export default class DisplayData extends Component {
   
    
    render(){        
        const mapped = this.props.favoriteMovies.map(movies=>{
            return(
                <li>
                    {movies}
                </li>
            )
        })
        
       

        return(
            
            <div>
                <div>{this.props.index+1}/{this.props.list.length}</div>
               <h1>{this.props.first} {this.props.last}</h1>
               <div>From: {this.props.title}</div>
               <div>Job Title: {this.props.employer}</div>
               <div>Employer: {this.props.city}</div>
                <div id="movies">
                    Favorite Movies: 
                    
                     <ol>
                    {mapped}            
                     </ol>
                </div>
                                       
            
            </div>
            
        )
    }

}