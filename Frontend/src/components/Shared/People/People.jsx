import React from "react";

function People() {
  const pep = [
    {
      photo: "/images/A1.png",
      name: "janesh",
    },
    {
      photo: "/images/A2.png",
      name: "mahesg ",
    },
    {
      photo: "/images/A3.png",
      name: "Ramesh ",
    },
    {
      photo: "/images/A4.png",
      name: "jankitu ",
    },
    {
      photo: "/images/A5.png",
      name: "kohini ",
    },
    {
      photo: "/images/A6.png",
      name: "lokkhene ",
    }
   
  ];
  return (
    <>
      {pep.map((People, index) => (
        <div className="" key={index}>
          <div className="w-16 h-16 text-center ml-2" >
            <img src={People.photo} alt="" srcset="" className="rounded-full"/>
            <p className="text-xs  leading-3">{People.name}</p>
          </div>
          
        </div>
      ))}
    </>
  );
}

export default People;
