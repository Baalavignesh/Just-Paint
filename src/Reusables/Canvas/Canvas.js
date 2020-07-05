import React, { Component } from 'react'
import Sketch from 'react-p5'
import Button from '../Button/Button';
import './Canvas.css';

class Canvas extends Component {

  constructor() {
    super();
    this.state = {
        filename : '',
        c:null,
        obj:null,
        x : 50,
        y : 50
    }
  }

  penSize = (value) => {
    console.log('pen');        
  }
    
    
  eraserSize = (props) => {
    console.log(props.value);
    console.log('eraser');
  }
    
  downloadImage = () => {
    this.state.obj.saveCanvas(this.state.c,'photo','jpg')
  }

  setup = (p5, canvasParentRef) =>  {
    this.setState({
      obj:p5,
      c:p5.createCanvas((p5.windowWidth/1.4) , p5.windowHeight/1.6).parent(canvasParentRef)
    })
    p5.background(255);
  };
    
  // draw = p5 => {
  //   console.log('bruh');
  //   p5.background(0);
  //   p5.ellipse(this.x, this.y, 70, 70);
  //   this.x++;
  // };

  paint = p5 => {
    p5.strokeWeight(10);
    p5.stroke(0,0,0);
          
    // console.log(r,g,b)
    // fill(r,g,b);
    p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
  }

  render() {
    return(
      <div className = "main-canvas">
        <Sketch setup = {this.setup}  mouseDragged= {this.paint} />
        <div className = "bottom-buttons">
          <Button name='Pen' click = {this.penSize}/>  
          <Button name='Download' click = {this.downloadImage}/>
        </div>
      </div>
    );
  };
}

export default Canvas;