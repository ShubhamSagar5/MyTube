import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY, generateRandomProfilePicUrl, generateThreeDigitNumber, randomNameGenerator } from "../constants/ConstantAPI";
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
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [liveMess,setLiveMess] = useState('')

  const lightMode = useSelector((store)=>store?.app?.lightMode)

  const [Subscribe,setSubscribe] = useState(false)

  const [like,setLike] = useState(false)
  const [dislike,setDislike] = useState(false)
  
  const LikeCount = generateThreeDigitNumber()
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

    setLiveMess('')
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


  const handleSubscribe = () => {
    setSubscribe(!Subscribe)
  }

  const handleLike = () => {
    if(like == true || like == false) {
      setDislike(false)
    }
    setLike(!like)
  }

  const handleDislike = () => {
    if(like == true){
      setLike(!like)
    }
    setDislike(!dislike)
  }

  useEffect(() => {
    
    getVideoDeatils();
    // getChannelProfile()
  },[]);

  return (
    <div className="mt-[75px]  h-[calc(100vh-4.625rem)] overflow-y-scroll no-scrollbar  m-5 md:flex ">
      <div className={`${lightMode ? 'text-black':'text-white'} "md:w-[70%]"`}>
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
        <div className="md:flex md:justify-between items-center">
 <div className="flex items-center mt-2">
           {
             <Avatar
                  className="cursor-pointer "
                  src={generateRandomProfilePicUrl()}
                  size="45"
                  round={true}
                /> 
           } 
        <p className=" font-bold md:font-semibold md:mx-3 mx-5 text-lg">{videoDetails?.snippet?.channelTitle}</p>

        <div onClick={handleSubscribe} className={` ${Subscribe ? 'bg-gray-400 text-black': 'bg-[#343434] text-white'}   px-3 py-[6px] rounded-full font-semibold cursor-pointer`}>{Subscribe ? 'UnSubscribe':'Subscribe'}</div>
        </div>


        <div className="flex items-center md:mt-2 mt-3 mb-4 md:mb-0">
        <div className="bg-[#343434] text-white px-2 md:px-3 py-[4px] md:py-[6px] rounded-full font-semibold flex items-center md:mr-2 mr-9"><span onClick={handleLike} className="px-2 cursor-pointer">{like ? <AiFillLike size={22}/> : <AiOutlineLike size={22}/>} </span>|<span onClick={handleDislike} className="px-2 cursor-pointer">{dislike ? <AiFillDislike size={22}/> : <AiOutlineDislike size={22}/>} </span></div>
        <div className="bg-[#343434] text-white px-2 md:px-3 py-[4px] md:py-[6px]  rounded-full font-semibold  md:mr-2 mr-9 flex cursor-pointer"><span className="mr-1"><RiShareForwardLine size={22}/></span>Share</div>
        <div className="bg-[#343434] text-white px-2 md:px-3 py-[4px] md:py-[6px]  rounded-full font-semibold flex cursor-pointer"><span className="mr-1"><GoDownload size={22}/></span>Download</div>
        </div>
        
        </div>
       
      </div>
      <div className={`${lightMode ? 'text-black':'text-white'} "md:w-[30%]"`}>
        <div className="md:mx-3 p-1">
          <p className="bg-[#343434] text-white py-1 flex items-center rounded-lg px-[120px]" onClick={handleLiveChatShow}>{liveChatShow ? 'HideChat' : 'LiveChat'} <span className="pl-[30px]">{liveChatShow ? <FaAngleUp size={15} className=""/> : <FaAngleDown size={15}/> }</span>
          </p>
          { liveChatShow && <><div className=" flex flex-col-reverse border border-[#343434] rounded-t-lg p-1 border-b-0 overflow-y-scroll mt-2 w-full h-[460px]">
          <LiveChat/>
          
          
          </div>
          <div className=" flex items-center  px-2 h-[50px] border border-[#343434] rounded-b-lg">
          <input value={liveMess} onChange={(e)=> setLiveMess(e.target.value)} className={`${lightMode ? 'bg-white border border-b-[#343434] text-black':'bg-black outline-none text-white'} " p-4 h-[20px] mb-[12px] w-[80%] outline-none "`} placeholder="Type Comment . . . . . . . . . . . . ." type="text" />

<span className="ml-5"><BsSend size={25} onClick={handleSendLiveMess} className="cursor-pointer " /></span>
          
          </div></>}
          
        </div>
      </div>
    </div>
  );
};

export default WatchPage;


