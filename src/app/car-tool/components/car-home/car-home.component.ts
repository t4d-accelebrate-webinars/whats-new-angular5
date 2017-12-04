import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { Car } from '../../models/car';

const testValidator = (c: FormControl) => {
  console.log('test validator');
  return null;
};

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  public cars: Car[] = [];
  public carForm: FormGroup;
  public makeUpdateOn = 'blur';

  constructor(
    private http: Http,
    private httpClient: HttpClient,
    // private app: ApplicationRef,
    private fb: FormBuilder,
  ) {

    this.carForm = this.fb.group({
      makeInput: [ '', {updateOn: this.makeUpdateOn, validators: testValidator} ],
      modelInput: '',
      yearInput: '',
      colorInput: '',
      priceInput: '',
    });

  }

  ngOnInit() {
    // this.http.get('http://localhost:3050/cars')
    //   .map(res => res.json())
    //   .subscribe(cars => this.cars = cars);

    this.httpClient.get<Car[]>('http://localhost:3050/cars')
      .pipe(
        map(cars => cars.map(car => {
          car.color = car.color.slice(0,1).toUpperCase() +
            car.color.slice(1);
          return car;
        }))
      )
      .subscribe(cars => {
        this.cars = cars;
        // this.app.tick();
      });

  }

  showCarForm() {
    console.log(this.carForm.value);
  }

}
