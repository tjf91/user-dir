import './App.css';
import ScrollButton from './components/ScrollButton';
import { Component } from 'react';
import DisplayContainer from './components/DisplayContainer';


class App extends Component {
  constructor(){
    super()
    this.state={
      currentIndex:0,
     
    }
    this.handleChangeIndex=this.handleChangeIndex.bind(this)
    this.handleLen=this.handleLen.bind(this)
  }


handleChangeIndex(newIndex){
  this.setState({
    currentIndex:newIndex,
    len:null
  })
  }
  handleLen(val){
    this.setState({len:val})
  }
  render(){
      

     return (
       <div className="App2">

        <div className="App1">
          
            
              <ScrollButton
              carrot="<Previous"
              handleChangeIndex={this.handleChangeIndex}
              currentIndex={this.state.currentIndex}
              direction={-1}
              />
              
            <div>
                  <DisplayContainer currentIndex={this.state.currentIndex}
                                  handleLen={this.handleLen}/>

                  </div>

            
              <ScrollButton 
              carrot=">Next"
              handleChangeIndex={this.handleChangeIndex}
              currentIndex={this.state.currentIndex}
              direction={+1}
              />
              
            </div>
            
              
       </div>
    
   
  );


  }
  
}

export default App;
