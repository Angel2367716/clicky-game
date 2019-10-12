import React from "react";
import "./FriendCard.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.removeFriend(props.id)} >
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
