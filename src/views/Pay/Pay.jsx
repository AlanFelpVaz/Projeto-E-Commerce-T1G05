import React, { Component } from 'react'

export default class Pay extends Component {
  //logica..
  state = {
    count:0, 
   }

  render() {
    return (
      <div>
       
        <ul>
          {this.props.lista.map(fruta =><li>{fruta}</li> )}
        </ul>
        


        </div>
    )
  }
}
