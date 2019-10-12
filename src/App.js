import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  //Setting this.state.friends to the friends json array 
  state ={
    friends
  };

  // remove friend functionality 
  removeFriend = id => {
    // console.log (id)

    //Filter this.state.friends for friends with an id no equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);

    //set this.state.friends equal to the new friends array
    this.setState({ friends });
  }
  render() {
    return (
      <Wrapper>
        <h1 className="title">Clicky Game</h1>
        {this.state.friends.map(friend => (
          <FriendCard
          removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
