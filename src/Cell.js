import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  updateColor = () => {
    let newColor = '#333';
    this.setState({
      color: newColor
    })
  }

  
  render() {
    return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.updateColor}></div>
    
  }
}

export default Cell;