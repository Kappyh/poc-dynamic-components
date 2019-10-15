import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BirdsComponent } from './components/birds/birds.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';

@NgModule({
  declarations: [
    DynamicComponentDirective,
    BirdsComponent,
    DogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BirdsComponent, DogsComponent, DynamicComponentDirective,]
})
export class SharedModule { }
