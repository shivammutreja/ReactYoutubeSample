import React from "react";

const VideoListItem = (props) => {
  const imageUrl = props.video.snippet.thumbnails.default.url;
  const videoTitle = props.video.snippet.title;

  return (
    <li className="list-group-item">
      <div onClick={() => props.selectVideoMethod(props.video)} className="video-item media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
