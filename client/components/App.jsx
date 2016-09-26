import React from 'react'

import Header from './Header'
import About from './About'
import Video from './Video'
import Gif from './Gif'
import Song from './Song'

export default React.createClass({
  render() {
    return (
      <div>
        <Header text="🐈😎 Trevor is cool 😎🐈" />
        <About text="😺 Here is some cool Ocelot thing 😺" />
        <div className="ocelot">
          <Video clip="https://www.youtube.com/embed/iUHnNzhwmdc?autoplay=1" />
          <Song song="https://www.youtube.com/embed/VYJARyE4QZE?autoplay=1" />
          <Gif gif="https://media.giphy.com/media/b3oqL9WtYUh5C/giphy.gif"/>
        </div>
      </div>
    )
  }
})
