import { CalculateBase } from "./calculateBase";

export class SquareCal extends CalculateBase{
    CalculateArea(a: number, b: number): number {
       return Math.pow(a, 2);
    }
    CalculatePerimeter(a: number, b: number): number {
        return 4 * a;
    }

}