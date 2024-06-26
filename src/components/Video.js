
import './Video.css'

const Video = ({title, id, channel, views,time,verified, children}) => {

   

    

return (
    
    <>
    <div className="container">
    <button className='close' onClick={()=>deleteVideo(id)}>X</button>
    <div className="pic">
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson"/>
    </div>
    <div className='title'> {title}</div> 
    <div className='channel'> {channel} {verified ? '✅' : null }</div> 
    <div className='views'> {views} views <span>.</span> {time}
    </div>     
    <div>
    {children}
    </div>
    </div>
    </>
    )
}

export default Video