import React, { Component } from 'react'

class Events extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: props.event
    }
  }
  set selected(event){
    this.setState(Object.assign({},this.state,{ selected: event }))
    if(this.props.onEventChanged){
      this.props.onEventChanged(event)
    }
  }
  get selected(){
    return this.state.selected;
  }
  appendMDL(ref){
    if(ref){
      componentHandler.upgradeElement(ref)
    }
  }
  render () {
    let eventButtons = []
    for(let event of this.props.events){
      let btnClass = 'mdl-button mdl-button--colored'
      if(this.selected && this.selected.id === event.id){
        btnClass += ' mdl-button--raised'
      }
      eventButtons.push(
        <a ref={(a) => this.appendMDL(a)} className={btnClass} onClick={ () => {this.selected = event} } key={event.id}>{event.name}</a>
      )
    }

    return (
      <div>
        <h3>Arrangementer</h3>
        <div className='event-button-div'>
          { eventButtons }
        </div>
      </div>
    )
  }
}

export default Events
