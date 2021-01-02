import { Component, OnInit } from '@angular/core';
import Konva from 'node_modules/konva';

@Component({
  selector: 'app-drawing-canvas',
  templateUrl: './drawing-canvas.component.html',
  styleUrls: ['./drawing-canvas.component.css']
})
export class DrawingCanvasComponent implements OnInit {

  ngOnInit(): void {
  }

}

export function activateSquare() {

  let canvas = document.getElementById('Drawing-canvas');

  if(canvas) {
    canvas.addEventListener('mousedown',function(e){
      e.preventDefault();
      let square = document.createElement('div');
      canvas.append(square);
      square.style.position = 'absolute';
      square.style.top = e.clientY - 50 + 'px';
      square.style.left = e.clientX + 'px';
  
      const stage = new Konva.Stage({
        container: square,
        width: 100,
        height: 100,
      });
  
      const layer = new Konva.Layer();
  
      const rect1 = new Konva.Rect({
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        fill: 'aqua',
        stroke: 'black',
        strokeWidth: 4,
      });

      layer.add(rect1);
      stage.add(layer);
    })
  }
}