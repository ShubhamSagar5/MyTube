import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../constants/ConstantAPI";



const useChannelThumbNail = (channelId) => {

    const [ytIcon, setYtIcon] = useState("");

    const getChannelProfile = async() => {
        const item = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=`+YOUTUBE_API_KEY)
        const json = await item?.json()
        setYtIcon(json?.items[0]?.snippet?.thumbnails?.high?.url);
        
    }

  
 
    useEffect(()=>{
        getChannelProfile()
    },[])

    return ytIcon
}

export default useChannelThumbNail