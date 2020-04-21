import React from 'react'
import Search from './Search'
import youtube from '../api/youtube'
import VideoList from './VideoLists'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyAcVMptY32um5tQCFINAqmiFYqeIYaDJtY';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      video: [],
      loading: true,
      selectedVideo: {}
    };
     
  }
  
  componentDidMount() {
    this.searchValue('buildings')
  }

  searchValue = async value =>  {

    const response =  await youtube.get('/search', {
      params: {
        q: value,
        part: 'snippet',
        maxResults: 5,
        key: KEY
      }
    })
    this.setState({video: response.data.items, selectedVideo: response.data.items[0], loading: false})
  
  }

  currentVideo = (item) => {
    this.setState({selectedVideo: item, loading: false})
  }
   
  render() {
    return(
      <div className="ui container">
        <Search searchValue={this.searchValue}/>
        <div className="ui grid">
          <div className="ui row">

            <div className="eleven wide column">
              <VideoDetail 
                video={this.state.selectedVideo} 
                loading={this.state.loading}/>
            </div>

            <div className="five wide column">
              <VideoList 
                videos={this.state.video} 
                currentVideo={this.currentVideo} />
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default App