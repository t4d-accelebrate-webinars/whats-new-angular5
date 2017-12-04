import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { CarHomeComponent } from './components/car-home/car-home.component';

@NgModule({
  imports: [
    CommonModule, HttpModule, HttpClientModule, ReactiveFormsModule,
  ],
  declarations: [CarHomeComponent],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
