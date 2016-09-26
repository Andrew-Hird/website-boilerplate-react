import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <iframe width="560" height="315" src={this.props.song} frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
})
