import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      color: this.props.value
     }
  }
  changeStateOnClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render() { 
    return ( 
      <div style={{backgroundColor: this.state.color}} onClick={this.changeStateOnClick} className='cell'>
        
      </div>
     );
  }
}
 
export default Cell;