import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { name, stats, sprites } = this.props.poke;
    const hp = stats.find(stat => stat.name === "hp");
    const img = this.state.isClicked ? sprites.back : sprites.front;

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" onClick={this.handleClick} src={img} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
