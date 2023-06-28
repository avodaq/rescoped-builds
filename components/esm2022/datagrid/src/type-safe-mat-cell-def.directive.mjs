import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
// @credits: https://nartc.me/blog/typed-mat-cell-def
class TypeSafeMatCellDefDirective {
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: TypeSafeMatCellDefDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: TypeSafeMatCellDefDirective, selector: "[matCellDef],[cdkCellDef]", inputs: { matCellDefType: "matCellDefType" }, ngImport: i0 }); }
}
export { TypeSafeMatCellDefDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: TypeSafeMatCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[matCellDef],[cdkCellDef]',
                }]
        }], propDecorators: { matCellDefType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1zYWZlLW1hdC1jZWxsLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL3R5cGUtc2FmZS1tYXQtY2VsbC1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU1qRCxxREFBcUQ7QUFDckQsTUFJYSwyQkFBMkI7SUFHdEMsTUFBTSxDQUFDLHNCQUFzQixDQUMzQixHQUFtQyxFQUNuQyxHQUFZO1FBV1osT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzhHQWpCVSwyQkFBMkI7a0dBQTNCLDJCQUEyQjs7U0FBM0IsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBSnZDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs4QkFFVSxjQUFjO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vLyBNRENcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuLy8gQGNyZWRpdHM6IGh0dHBzOi8vbmFydGMubWUvYmxvZy90eXBlZC1tYXQtY2VsbC1kZWZcbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttYXRDZWxsRGVmXSxbY2RrQ2VsbERlZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUeXBlU2FmZU1hdENlbGxEZWZEaXJlY3RpdmU8VD4ge1xuICBASW5wdXQoKSBtYXRDZWxsRGVmVHlwZSE6IFRbXSB8IE9ic2VydmFibGU8VFtdPiB8IE1hdFRhYmxlRGF0YVNvdXJjZTxUPjtcblxuICBzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxUPihcbiAgICBkaXI6IFR5cGVTYWZlTWF0Q2VsbERlZkRpcmVjdGl2ZTxUPixcbiAgICBjdHg6IHVua25vd24sXG4gICk6IGN0eCBpcyB7XG4gICAgLy8gQGV4dGVuZGVkIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Nkay90YWJsZS9hcGkjQ2RrQ2VsbE91dGxldFJvd0NvbnRleHRcbiAgICAkaW1wbGljaXQ6IFQ7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBldmVuOiBudW1iZXI7XG4gICAgZmlyc3Q6IG51bWJlcjtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGxhc3Q6IG51bWJlcjtcbiAgICBvZGQ6IG51bWJlcjtcbiAgfSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==