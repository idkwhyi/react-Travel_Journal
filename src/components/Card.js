import React from "react";
import pImg from "../images/Path.png";

export default function Card(props) {
  return (
    <div className="card-container flex gap-5">
      <img
        className="card-img rounded-md"
        src={props.imageUrl}
        alt="cardimage"
      />
      <div className="card-info">
        <div className="pt-5 pb-5"> {/* container for info */}
          <div className="w-full flex justify-start items-center gap-3">
            <div className="flex justify-center items-center gap-1">
              <img className="bg-cover h-3" src={pImg} alt="path_image"></img>
              <div className="text-xs">{props.location}</div>
            </div>
            <div className="underline text-xs text-lightGrey">
              View on Google Maps
            </div>
          </div>
          <div className="text-2xl font-bold mt-1">{props.title}</div>
          <div className="text-xs font-bold mt-3">{props.startDate} - {props.endDate}</div>
          <div className="card-description mt-1">{props.description}</div>
        </div> {/* container for info */}
      </div>
    </div>
  );
}
