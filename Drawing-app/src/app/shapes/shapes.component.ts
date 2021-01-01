import { Component, OnInit } from '@angular/core';
import Konva from 'node_modules/konva';
import { activateSquare } from '../drawing-canvas/drawing-canvas.component';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const stage = new Konva.Stage({
      container: 'Shape',
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

    rect1.addEventListener('click',function(){
      console.log(rect1);
      activateSquare();
    });
  }

}
