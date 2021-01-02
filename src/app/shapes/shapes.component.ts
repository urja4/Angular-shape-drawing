import { Component, OnInit } from '@angular/core';
import Konva from 'node_modules/konva';
import { activateSquare } from '../drawing-canvas/drawing-canvas.component';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {

  ngOnInit(): void {

    const stage = new Konva.Stage({
      container: 'Shape',
      width: 100,
      height: 100,
    });

    const layer = new Konva.Layer();

    const rect1 = new Konva.Rect({
      x: 0,
      y: 0,
      width: 100,
      height: 1000,
      fill: 'aqua',
      stroke: 'black',
      strokeWidth: 6,
    });
    layer.add(rect1);
    stage.add(layer);

    rect1.addEventListener('click',function(e){
      e.preventDefault();
      activateSquare();
    });
  }

}
