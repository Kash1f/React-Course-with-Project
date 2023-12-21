import Video from "./components/Video"
import './App.css'
import videos from './data/data'
import PlayButton from "./components/PlayButton"
function App(){

  
  return(
  <div className="App">
  <div>Videos</div>

    {
      videos.map(video=><Video
        key={video.id}
         title={video.title} 
         views={video.views} 
         time={video.time} 
         channel={video.channel} 
         verified={video.verified}
         id={video.id}
         ></Video>)
    }

{/* key and its value -> video = key, title = value, key-value-pair*/}

<div style={{clear:'both'}}>
    <PlayButton></PlayButton>
    </div>
  </div>
 
  )
}

export default App