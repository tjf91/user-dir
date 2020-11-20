import './App.css';
import ScrollButton from './components/ScrollButton';
import { Component } from 'react';
import DisplayContainer from './components/DisplayContainer';


class App extends Component {
  constructor(){
    super()
    this.state={
      currentIndex:0,
     len:25
    }
    this.handleChangeIndex=this.handleChangeIndex.bind(this)
    this.handleLen=this.handleLen.bind(this)
  }


handleChangeIndex(newIndex){
  this.setState({
    currentIndex:newIndex,
    
  })
  }


  handleLen(val){
    this.setState({len:val})
  }
  render(){
    return  this.state.currentIndex===-1 || this.state.currentIndex===25?alert('TODO....'):

      (
       <div className="App2">

        <div className="App1">
          
            
              <ScrollButton
              carrot="<Previous"
              handleChangeIndex={this.handleChangeIndex}
              currentIndex={this.state.currentIndex}
              direction={-1}
              len={this.state.len}
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
              len={this.state.len}
              />
              
            </div>
            
              
       </div>
    
   
  );


  }
  
}

export default App;
