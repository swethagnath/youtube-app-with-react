import React from 'react'

class Search extends React.Component {
  
  constructor(props) {

    super(props)
    this.state = {
      searchValue : 'buildings'
    }

  }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.searchValue(this.state)
  }
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="video">Video Search</label>
            <input id="video" type="text" value={this.state.searchValue} onChange={e => {this.setState({searchValue: e.target.value})}}/>
          </div>
        </form>
      </div> 
    )
  }
  
}
  
export default Search