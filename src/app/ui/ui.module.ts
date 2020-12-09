import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';


const MaterialComponent = [
  DragDropModule,
  FlexLayoutModule
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class UiModule { }
