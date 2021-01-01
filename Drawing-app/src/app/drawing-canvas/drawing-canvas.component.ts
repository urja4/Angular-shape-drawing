import { Component, OnInit } from '@angular/core';
import Konva from 'node_modules/konva';

@Component({
  selector: 'app-drawing-canvas',
  templateUrl: './drawing-canvas.component.html',
  styleUrls: ['./drawing-canvas.component.css']
})
export class DrawingCanvasComponent implements OnInit {

  title = 'canvas';
  constructor() { }

  ngOnInit(): void {
    console.log('added',document.getElementById('Drawing-canvas'));
  }

}

export function activateSquare() {
  console.log('yes');
  let canvas = document.getElementById('Drawing-canvas');
  if(canvas) {
    canvas.addEventListener('click',function(e){
      let square = document.createElement('div');
      square.id = 'Square';
      square.style.position = 'absolute';
      square.style.top = JSON.stringify(e.pageY);
      square.style.left = JSON.stringify(e.pageX);
      canvas.append(square);

      const width = window.innerWidth;
      const height = window.innerHeight;
  
      const stage = new Konva.Stage({
        container: 'Square',
        width: width,
        height: height,
      });
  
      const layer = new Konva.Layer();
  
      const rect1 = new Konva.Rect({
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
      });
      // add the shape to the layer
      layer.add(rect1);
  
      // add the layer to the stage
      stage.add(layer);
    })
  }
}