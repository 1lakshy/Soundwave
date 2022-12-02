import React from "react";

function LikeCard(props) {
//   const props = [
//     {
//       Likes: "1.1k",
//       Comments: "48",
//       Views: "3,467",
//     },
//     {
//       Likes: "2.1k",
//       Comments: "48",
//       Views: "3,467",
//     },
//     {
//       Likes: "1.7k",
//       Comments: "422",
//       Views: "3,467",
//     },
//     {
//       Likes: "15k",
//       Comments: "42",
//       Views: "2,467",
//     },
//     {
//       Likes: "4.1k",
//       Comments: "58",
//       Views: "3,463",
//     },
//   ];

  return (
    <div>
     
        <div className="bar">
          <div className="flex justify-between items-center">
            <div className="flex w-[4rem] items-center">
              <img className="w-[1.5rem] h-[1.5rem] mr-1" src="/icons/heart-solid.svg" alt="" />
              <p className="LikeText">{props.post.Likes}</p>
            </div>

            <div className="flex w-[4rem] items-center ">
              <img className="likeImg  mr-1" src="/icons/comments.png" alt="" />
              <p className="LikeText">{props.post.Comments}</p>
            </div>

            <div className="flex w-[4rem] items-center">
              <img className="likeImg  pr-1" src="/icons/view.png" alt="" />
              <p className="LikeText">{props.post.Views}</p>
            </div>
          </div>

          <div className="flex items-center  w-[6rem] bg-black min-h-full rounded-l-xl rounded-br-xl">
            <img
              className=" w-[1.25rem] h-[1.25rem] ml-2"
              src="https://cdn-icons-png.flaticon.com/512/929/929468.png"
              alt=""
            />
            <p className="text-white ml-2">share</p>
          </div>
        </div>

    </div>
  );
}

export default LikeCard;
