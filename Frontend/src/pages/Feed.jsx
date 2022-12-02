import React, { useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const [feedImage, setFeedImage] = useState("");
  const [feedVideo, setFeedVideo] = useState("");
  const [feedText, setFeedText] = useState("");

  const reduceImg = useRef()
  const canvasImg = useRef()

  function captureImage(e) {
console.log("change" + canvasImg.current)
  
      let imageFile = e.target.files[0];
  
      var reader = new FileReader();

      reader.onloaded = function (e) {
        // var img = document.createElement("img");
        // img.src = e.target.result;
  
        // img.onload = function (event) {
        // Dynamically create a canvas element
        var canvas = canvasImg.current;
        console.log(canvas)
        var ctx = canvas.getContext("2d");
  
        // Actual resizing
        ctx.drawImage(img, 0, 0,500,400);
        // Show resized image in preview element
  
        var dataurl = ctx.canvas.toDataURL(imageFile.type,100);
  
        console.log(dataurl + "hellowji")
        // document.getElementById("preview").src = dataurl;
        // }
        // img.src = e.target.result;
      };
      // }
      // reader.readAsDataURL(imageFile);
 

    // const imageData = e.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(imageData);

    // reader.onloadend = function () {
    //   console.log(reader.result);
    //   setFeedImage(reader.result);
    // };
  }

  function captureVideo(e) {
    const videoData = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageData);

    reader.onloadend = function () {
      console.log(reader.result);
      setFeedVideo(reader.result);
    };
  }

  function captureText(e) {
    const feedtext = e.target.files[0];
    console.log(feedtext)
    setFeedText(feedtext)
  }

  const navigate = useNavigate();
  const name = "hellow ji"

  // async function submit(data) {

  //   try {
      
  //     console.log("ok inside submit")
  //     const { data } = await activate({name ,feedText ,feedImage , feedVideo });

  //     if(data.auth){
  //       // if(!mounted){
  //         dispatch(setAuth(data))
  //       // }
   
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   navigate("/")
  // }
  

  return (
    <div className="h-screen fixed">
      <div className="w-full h-[10rem] ">
        <img
          className="h-[10rem] w-screen rounded-br-full"
          src="/Photo/style-2.png"
          alt=""
        />
      </div>
      <div className="w-28 h-28 rounded-full bg-slate-700 absolute top-[6rem]"></div>
      <div className="relative top-[2.5rem] left-[1rem]">
        <h1 className="font-extrabold text-4xl">Jeamesha</h1>
      </div>

      <div className="w-[calc(100%-2rem)] h-2/4 ml-4 bg-slate-300 relative top-[4rem] rounded-3xl">
        <div className=" justify-center pt-4 bg-slate-200 min-h-[22rem] max-h-fit rounded-2xl ">
          {/* <input
          style={{ maxWidth:200}}
            className=" rounded-xl w-[20rem] h-fit text-2xl outline-none text-clip bg-slate-200"
            type="text" onChange={captureText} 
          /> */}

<textarea id="text" name="text" rows="15" cols="46"></textarea>
          {/* <img
            src={feedImage}
            className="border-transparent w-36 h-36 absolute bottom-20" onError={`this.style.display='none'`}
          /> */}

          <canvas id="canva" ref={canvasImg}></canvas>
        </div>

        {/* input file htmlFor feed */}

        <div className="flex py-3 pl-6 absolute bottom-1 min-w-[20rem]">
          <div className="">
            <input
              type="file"
              id="photo"
              accept="Image/"
              className="hidden"
              onChange={captureImage}
              ref={reduceImg}
            />
            <label htmlFor="photo">
              <img src="/icons/photo.png" className="likeImg" alt="" />
            </label>
          </div>

          <div className="">
            <input type="file" id="video" className="hidden" onChange={captureVideo} />
            <label htmlFor="video" className="pl-2">
              <img src="/icons/video.png" className="likeImg" alt="" />
            </label>
          </div>

          <button className="text-black bg-slate-200 w-20 h-16">Feed</button>
        </div>
      </div>
    </div>
  );
  }

export default Feed;
