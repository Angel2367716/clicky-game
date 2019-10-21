import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ClickyGame from "./pages/ClickyGame";

// import FriendCard from "./components/FriendCard";
// import friends from "./friends.json";

function App (){
    return (
      <Router>
        <div style={{height: '100%'}}>
      <Nav />
        <Wrapper>
        <Switch>
            <Route exact path="/" component={ClickyGame} />
            <Route exact path="/clickygame" component={ClickyGame} />
        </Switch>
      </Wrapper>
      <Footer />
      </div>
      </Router>
    );
  }

export default App;
