import React, { Component } from "react";
import LikeButton from "./likeButton";

class PropsTest extends Component {
  handleClick = (event) => {
    console.log(event);
  };
  render() {
    return (
      <div>
        <LikeButton title={"Like"} onClick={this.handleClick}></LikeButton>
      </div>
    );
  }
}

export default PropsTest;
