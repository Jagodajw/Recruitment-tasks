import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarModel } from './car.model';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule, MatIconModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('popup') popup: ElementRef | undefined;
  private localStorageKey = 'cars';
  protected carObj: CarModel = new Car();
  protected carList: CarModel[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem(this.localStorageKey);
    if(localData != null) {
      this.carList = JSON.parse(localData)
    }
  }


  getCars(): CarModel[] {
      const cars = localStorage.getItem(this.localStorageKey);
      return cars ? JSON.parse(cars) : [];
  }

  addCar(car:CarModel) : void{
      const cars = this.getCars();
      cars.push(car);
      localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
  }

  openPopup(): void{
    const popup = document.getElementById("popup");
    const list = document.getElementById("list");
    if (popup != null) {
      popup.style.display = 'block'
    }
    if (list != null){
      list.style.display = 'none'
    }
  }

  close(): void{
    this.carObj = new Car();
    const list = document.getElementById("list");
    if (this.popup != null) {
      this.popup.nativeElement.style.display = 'none';
    }
    if (list != null){
      list.style.display = 'flex'
    }
  }

  save():void{
    const isLocalPresent = localStorage.getItem(this.localStorageKey);
    if (isLocalPresent != null) {
      const oldArray = JSON.parse(isLocalPresent);
      this.carObj.id = oldArray.length + 1;
      oldArray.push(this.carObj);
      this.carList = oldArray;
      localStorage.setItem(this.localStorageKey, JSON.stringify(oldArray));
    } else {
      const newArr = [];
      newArr.push(this.carObj);
      this.carObj.id = 1;
      this.carList = newArr;
      localStorage.setItem(this.localStorageKey, JSON.stringify(newArr));
    }
    this.close()
  }
  
}

export class Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  part: string;
  cost: number;

  constructor() {
    this.id = 0;
    this.brand = '',
    this.model = '',
    this.year = 0,
    this.part= '';
    this.cost= 0;
    }

}

