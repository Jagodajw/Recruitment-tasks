import { Injectable } from "@angular/core";
import { CarModel } from "./car.model";

@Injectable({
    providedIn: 'root'
  })

export class CarService {
    private localStorageKey = 'cars';

    getCars(): CarModel[] {
        const cars = localStorage.getItem(this.localStorageKey);
        return cars ? JSON.parse(cars) : [];
    }

    addCar(car:CarModel) : void{
        const cars = this.getCars();
        cars.push(car);
        localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
    }





  }