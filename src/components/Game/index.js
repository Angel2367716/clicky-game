import React, { Component } from "react";
import Container from "../Container";
import ClickItem from "../../components/ClickItem";
import friends from "../../friends.json"

class Game extends Component {
    state = {
        friends,
        score: 0,
        topScore: 0
      };
    
      componentDidMount() {
        this.setState({ friends: this.shufflefriends(this.state.friends) });
      }
    
      handleCorrectGuess = newfriends => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
    
        this.setState({
          friends: this.shufflefriends(newfriends),
          score: newScore,
          topScore: newTopScore
        });
      };
    
      handleIncorrectGuess = friends => {
        this.setState({
          friends: this.resetfriends(friends),
          score: 0
        });
      };
    
      resetfriends = friends => {
        const resetfriends = friends.map(item => ({ ...item, clicked: false }));
        return this.shufflefriends(resetfriends);
      };
    
      shufflefriends = friends => {
        let i = friends.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = friends[i];
          friends[i] = friends[j];
          friends[j] = temp;
          i--;
        }
        return friends;
      };
    
      handleItemClick = id => {
        let guessedCorrectly = false;
        const newfriends = this.state.friends.map(item => {
          const newItem = { ...item };
          if (newItem.id === id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              guessedCorrectly = true;
            }
          }
          return newItem;
        });
        guessedCorrectly
          ? this.handleCorrectGuess(newfriends)
          : this.handleIncorrectGuess(newfriends);
      };
    

    render() {
        return (
            <Container>

            { this.state.friends.map(item => (
                <ClickItem
                key={item.id}
                id={item.id}
                shake={!this.state.score && this.state.topScore}
                handleClick={this.handleItemClick}
                image={item.image}
                />
                ))}
                </Container>
        )
    }
}


export default Game;