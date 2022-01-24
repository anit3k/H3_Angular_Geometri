import { CalculateBase } from "./calculateBase";

export class RectangleCal extends CalculateBase {
 
    CalculateArea(a: number, b: number): number {
        return a * b;
    }
    CalculatePerimeter(a: number, b: number): number {
        return a + a + b + b;
    }

}