import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FlowerCard from "./components/FlowerCard";
import flowers from "./flowers.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    flowers,
    score: 0,
    topScore: 0,
    currentText: "Click an image to begin!"
  };



  flowerClick = id => {
    let thisFlower = this.state.flowers.find(flower => flower.id === id);
    if (thisFlower.clicked === 1) {
      this.setState({ currentText: "You guessed incorrectly!" })
      this.setState({ score: 0 });
      this.state.flowers.forEach(function (val, index) {
        val.clicked = 0;
      })
      this.setState({ flowers });

    }
    else {
      this.setState({ currentText: "You guessed correctly!" })
      this.state.flowers.find(flower => flower.id === id).clicked = 1;
      shuffle(flowers);
      console.log(JSON.stringify(flowers, null, 2));
      this.setState({ score: this.state.score + 1 });
      if (this.state.score >= this.state.topScore)
        this.setState({ topScore: this.state.topScore + 1 })
      this.setState({ flowers });
    }

  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore} texttoDisplay={this.state.currentText}></Navbar>
        <Header></Header>
        {this.state.flowers.map(flower => (
          <FlowerCard
            flowerClick={this.flowerClick}
            id={flower.id}

            image={flower.image}
            clicked={false}
          />
        ))}
      </Wrapper>
    );
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default App;