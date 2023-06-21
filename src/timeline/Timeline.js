import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Megadeth_",
      postImage:
        "https://whiplash.net/imagens_promo_22/megadeth_capa_rustinpeace.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Possessed",
      postImage:
        "https://hedflow.com/wp-content/uploads/2019/06/LRM_EXPORT_53993343145406_20190624_134059079-e1561398571671.jpeg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Velho",
      postImage:
        "https://sincretizar.files.wordpress.com/2014/02/velho-vida-longa-ao-primitivo.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "Immortal",
      postImage:
        "https://riometalsite.files.wordpress.com/2023/04/mail-6-1.jpg",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
