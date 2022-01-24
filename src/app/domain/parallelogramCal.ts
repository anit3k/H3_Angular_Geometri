import { CalculateBase } from "./calculateBase";

export class ParallelogramCal extends CalculateBase{
    CalculateArea(a: number, b: number): number {
        return a * b;
    }
    CalculatePerimeter(hieght: number, baseline: number): number {
        return 2 * hieght + 2 * baseline;
    }

}