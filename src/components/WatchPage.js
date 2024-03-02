import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY, generateRandomProfilePicUrl } from "../constants/ConstantAPI";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import LiveChat from "./LiveChat";
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, toggleLiveChat } from "../utilis/ChatSlice";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";



const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [liveMess,setLiveMess] = useState('')
  
  const dispatch = useDispatch()

  const liveChatShow = useSelector((store)=>store?.chat?.liveChatShow)

  const [videoDetails, setVideoDeatils] = useState("");

  // const [channelId, setChannelId] = useState("");


  const getVideoDeatils = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    setVideoDeatils(json?.items[0]);
    // setChannelId(json?.items[0]?.snippet?.channelId)
  };

  const handleSendLiveMess = () => {
    const userName = prompt('Enter Your Name')
    dispatch(addMessage({
      profileURL:'https://www.aidemos.info/wp-content/uploads/2023/05/A_boy_simple_avatar_pixar_3d_rendering_Light_backgroun_3f9635f5-175c-4740-98c5-c53cd64885f8.webp',
      name:userName,
      message:liveMess
    }))
  }

  const handleLiveChatShow = () => {
    dispatch(toggleLiveChat())
  }

  // const [ytIcon, setYtIcon] = useState("");

  // const getChannelProfile = async() => {
  //     const item = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=`+YOUTUBE_API_KEY)
  //     const json = await item?.json()
  //     setYtIcon(json?.items[0]?.snippet?.thumbnails?.high?.url);
  //     // console.log(json)
  // }

  useEffect(() => {
    
    getVideoDeatils();
    // getChannelProfile()
  },[]);

  return (
    <div className="mt-[75px]  h-[calc(100vh-4.625rem)] overflow-y-scroll no-scrollbar  m-5 md:flex">
      <div className="w-[70%]">
        <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 rounded-lg">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            style={{ backgroundColor: "#000000" }}
            playing={false}
          />
        </div>
        <h1 className="p-1 font-bold text-lg mt-1">{videoDetails?.snippet?.title}</h1>
        <div className="flex justify-between items-center">
 <div className="flex items-center mt-2">
           {
             <Avatar
                  className="cursor-pointer "
                  src={generateRandomProfilePicUrl()}
                  size="45"
                  round={true}
                /> 
           } 
        <p className="font-semibold mx-3 text-lg">{videoDetails?.snippet?.channelTitle}</p>

        <div className="bg-black text-white px-3 py-[6px] rounded-full font-semibold cursor-pointer">Subscribe</div>
        </div>


        <div className="flex items-center mt-2">
        <div className="bg-gray-400 px-3 py-[6px] rounded-full font-semibold flex items-center mr-2"><span className="px-2 cursor-pointer"><AiOutlineLike size={22}/></span>|<span className="px-2 cursor-pointer"><AiOutlineDislike size={22}/></span></div>
        <div className="bg-gray-400 px-3 py-[6px] rounded-full font-semibold  mr-2 flex cursor-pointer"><span className="mr-1"><RiShareForwardLine size={22}/></span>Share</div>
        <div className="bg-gray-400 px-3 py-[6px] rounded-full font-semibold flex cursor-pointer"><span className="mr-1"><GoDownload size={22}/></span>Download</div>
        </div>
        
        </div>
       
      </div>
      <div className="w-[30%]  ">
        <div className="mx-3 ">
          <p className="bg-gray-300 py-1 flex items-center rounded-lg px-[120px]" onClick={handleLiveChatShow}>{liveChatShow ? 'Hide Chat' : 'Live Chat'} <span className="pl-[30px]">{liveChatShow ? <FaAngleUp size={15} className=""/> : <FaAngleDown size={15}/> }</span>
          </p>
          { liveChatShow && <><div className=" flex flex-col-reverse border border-black rounded-t-lg p-1 border-b-0 overflow-y-scroll mt-2 w-full h-[460px]">
          <LiveChat/>
          
          
          </div>
          <div className=" flex items-center px-2 h-[50px] border border-black rounded-b-lg">
          <input value={liveMess} onChange={(e)=> setLiveMess(e.target.value)} className="p-4 h-[20px] mb-[14px] w-[80%] border border-b-black outline-none" placeholder="Chat . . . . . " type="text" />

<span className="ml-5"><BsSend size={25} onClick={handleSendLiveMess} className="cursor-pointer " /></span>
          
          </div></>}
          
        </div>
      </div>
    </div>
  );
};

export default WatchPage;


