import React, { Component } from 'react';
import * as converter from '@q42philips/hue-color-converter';

class RGBForm extends Component {
  constructor() {
    super();

    this.state = {
      red: 60,
      green: 64,
      blue: 198,
      x: 0,
      y: 0
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.setBGColor = this.setBGColor.bind(this);
    this.calculateXY = this.calculateXY.bind(this);
  }

  onInputChange(e) {
    const { id } = e.target;

    this.setState({
      [id]: Number(e.target.value)
    }, () => {
      this.setBGColor();
      this.calculateXY();
    });
  }

  setBGColor() {
    const { red, green, blue } = this.state;
    document.documentElement.style.setProperty('--red', red);
    document.documentElement.style.setProperty('--green', green);
    document.documentElement.style.setProperty('--blue', blue);
  }

  calculateXY() {
    const { red, green, blue } = this.state;
    const [x, y] = converter.calculateXY(red, green, blue, 'LCT007');
    this.setState({ x, y });
  }

  componentDidMount() {
    this.setBGColor();
    this.calculateXY();
  }

  render() {
    const { red, green, blue, x, y } = this.state;

    return(
      <form className="rgb-form">
        <div className="form-group text-center">
          <h4>
            Convert <span className="rgb">RGB</span> to <span className="xy">XY</span>
          </h4>
        </div>
        <div className="form-group red">
          <label htmlFor="red">Red</label>
          <input
            type="text"
            id="red"
            className="form-control"
            value={red}
            onChange={this.onInputChange}
            maxLength="3"
          />
        </div>
        <div className="form-group green">
          <label htmlFor="green">Green</label>
          <input
            type="text"
            id="green"
            className="form-control"
            value={green}
            onChange={this.onInputChange}
            maxLength="3"
          />
        </div>
        <div className="form-group blue">
          <label htmlFor="blue">Blue</label>
          <input
            type="text"
            id="blue"
            className="form-control"
            value={blue}
            onChange={this.onInputChange}
            maxLength="3"
          />
        </div>
        <div className="form-group text-center mt-2">
          <h6><span className="xy">XY</span>: [{x},{y}]</h6>
        </div>
      </form>
    );
  }
}

export default RGBForm;
