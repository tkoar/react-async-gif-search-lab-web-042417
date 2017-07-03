import React from 'react'


export default class GifSearch extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.props.submitHandler}>
          <input type='text' name='searchQuery'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }

}
