import React, { Component } from "react";
// import Container from "../../components/Container";
// import Row from "../../components/Row";
// import Col from "../../components/Col";
import Hero from "../../components/Hero";
import Game from "../../components/Game";
import "./ClickyGame.css";


class ClickyGame extends Component {
    render() {
        return (
            <div>
                <Hero backgroundImage="https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                    <h1>Clicky Game! </h1>
                    <h3>Click on an image to earn points, but don't click on any more than once!</h3>
                </Hero>
                
                {/* <Container Style={{ marginTop: 30 }}> */}
                    {/* <Row>
                        <Col size="md-12"> */}
                            <Game />            
                        {/* </Col>         
                    </Row> */}
            </div>
        );
    }
}

export default ClickyGame;