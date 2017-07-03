import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: []
    }
  }

  componentWillMount() {
    this.getGifs
  }

  getGifs(searchQuery) {
    fetch('http://api.giphy.com/v1/gifs/search?q='+ searchQuery +'&api_key=dc6zaTOxFJmzC')
    .then(res => res.json())
    .then(r => r['data'])
    .then(arr => arr.slice(0, 5))
    .then(results => this.setState({
      gifs: results
    }))
  }

  submitHandler(event) {
    event.preventDefault()
    this.getGifs(event.target.searchQuery.value)
  }

  render() {
    return (
      <div>
        <GifSearch submitHandler={this.submitHandler.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
