import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISquareType } from './domain/iSquareType';
import { IUSerInput } from './domain/iUserInput';
import { ParallelogramCal } from './domain/parallelogramCal';
import { RectangleCal } from './domain/rectangleCalculate';
import { SquareCal } from './domain/squareCalculate';
import { TrapezeCal } from './domain/trapezeCal';

@Component({
  selector: 'geo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arealResult: string = "";
  perimeterResult: string = "";

  // ngModel
  userInput: IUSerInput = {
    squareType: "",
    sideA: 0,
    sideB: 0,
    height: 0,
    baseline: 0,
  };

  // calculaters
  rectCal: RectangleCal = new RectangleCal;
  squaCal: SquareCal = new SquareCal;
  parraCal: ParallelogramCal = new ParallelogramCal;
  trapCal: TrapezeCal = new TrapezeCal;


  squareTypes: ISquareType[] = [{ id: 1, type: "Rectangle" }, { id: 2, type: "Square" }, { id: 3, type: "Parallelogram" }, { id: 4, type: "Trapeze" }]

  onClickCalculate(form: NgForm) {
    this.clearResult();
    switch (this.userInput.squareType) {
      case "":
        console.log("no square type selected!");
        break;
      case "1":
        let arealResultRect = this.rectCal.CalculateArea(this.userInput.sideA, this.userInput.sideB)
        this.arealResult += ("Area is: " + arealResultRect);
        let perimeterResultRect = this.rectCal.CalculatePerimeter(this.userInput.sideA, this.userInput.sideB);
        this.perimeterResult += ("Perimeter is: " + perimeterResultRect);
        break;
      case "2":
        let arealResultSqu = this.squaCal.CalculateArea(this.userInput.sideA, this.userInput.sideB);
        this.arealResult += ("Area is: " + arealResultSqu);
        let perimeterResultSqu = this.squaCal.CalculatePerimeter(this.userInput.sideA, this.userInput.sideB);
        this.perimeterResult += ("Perimeter is: " + perimeterResultSqu)
        break;
      case "3":
        let arealResultParra = this.parraCal.CalculateArea(this.userInput.height, this.userInput.baseline);
        this.arealResult += ("Area is: " + arealResultParra);
        let perimeterResultParra = this.parraCal.CalculatePerimeter(this.userInput.sideA, this.userInput.sideB);
        this.perimeterResult += ("Perimeter is: " + perimeterResultParra);
        break;
      case "4":
        let arealResultTrap = this.trapCal.CalculateArea(this.userInput.height, this.userInput.sideA + this.userInput.sideB);
        this.arealResult += ("Area is: " + arealResultTrap);
        // implement calculation of perimeter of trapez
        this.perimeterResult += ("Perimeter is: Not Implementet!")
        break;
    }    
  }

  clearResult(): void {
    this.arealResult = "";
    this.perimeterResult = "";
  }
}
