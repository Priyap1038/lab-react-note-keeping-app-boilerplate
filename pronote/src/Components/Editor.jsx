import React, { Component } from 'react'
import "../App.css"

export class Editor extends Component {
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
       this.setState({
        text:e.target.value
       })
    }

  render() {
    return (
      <div className='box'>
        {/* <h1>Editor</h1> */}
        <div className='input'>
            <textarea cols="30" rows="10" onChange={e=>this.handleChange(e)}></textarea>
        </div>
        <div className='output'>
            {this.state.text}
        </div>
      </div>
    )
  }
}

export default Editor