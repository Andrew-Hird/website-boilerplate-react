import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <iframe width="560" height="315" src={this.props.clip} frameborder="0" allowfullscreen volume="0"></iframe>
      </div>
    )
  }
})
