import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

    this.t = 0.0;
  };
  draw = (p5) => {
    this.t += 0.1;

    p5.background(0);

    p5.translate(20, 0, Math.sin(this.t) * 200);
    p5.push();
    p5.rotateZ(this.t * 0.13);
    p5.rotateX(this.t * 0.17);
    p5.rotateY(this.t * 0.19);
    p5.box(70, 70, 70);
    p5.pop();
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
