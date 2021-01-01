import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DrawingCanvasComponent } from './drawing-canvas/drawing-canvas.component';
import { ShapesComponent } from './shapes/shapes.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DrawingCanvasComponent,
    ShapesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
