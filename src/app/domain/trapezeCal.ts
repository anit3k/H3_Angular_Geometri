import { CalculateBase } from "./calculateBase";

export class TrapezeCal extends CalculateBase {
    CalculateArea(height: number, sumOfAandB: number): number {
        return 0.5 * height + sumOfAandB;
    }
    CalculatePerimeter(a: number, b: number): number {
        throw new Error("Method not implemented.");
    }

}