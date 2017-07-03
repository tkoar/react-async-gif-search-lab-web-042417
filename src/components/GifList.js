import React from 'react'


export default class GifList extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    const gifObjs = this.props.gifs
    return (
      <div>
        <ul>
          {gifObjs.map((gif, i) =><li><img key={i} alt='image' src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}></img></li>)}
        </ul>
      </div>
    )
  }

}
