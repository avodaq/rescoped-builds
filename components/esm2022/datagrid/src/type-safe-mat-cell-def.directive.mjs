import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
// @credits: https://nartc.me/blog/typed-mat-cell-def
class TypeSafeMatCellDefDirective {
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: TypeSafeMatCellDefDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: TypeSafeMatCellDefDirective, isStandalone: true, selector: "[matCellDef],[cdkCellDef]", inputs: { matCellDefType: "matCellDefType" }, ngImport: i0 }); }
}
export { TypeSafeMatCellDefDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: TypeSafeMatCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[matCellDef],[cdkCellDef]',
                    standalone: true,
                }]
        }], propDecorators: { matCellDefType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1zYWZlLW1hdC1jZWxsLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL3R5cGUtc2FmZS1tYXQtY2VsbC1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU1qRCxxREFBcUQ7QUFDckQsTUFLYSwyQkFBMkI7SUFHdEMsTUFBTSxDQUFDLHNCQUFzQixDQUMzQixHQUFtQyxFQUNuQyxHQUFZO1FBV1osT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzhHQWpCVSwyQkFBMkI7a0dBQTNCLDJCQUEyQjs7U0FBM0IsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBTHZDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBRVUsY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLy8gTURDXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbi8vIEBjcmVkaXRzOiBodHRwczovL25hcnRjLm1lL2Jsb2cvdHlwZWQtbWF0LWNlbGwtZGVmXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbWF0Q2VsbERlZl0sW2Nka0NlbGxEZWZdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVHlwZVNhZmVNYXRDZWxsRGVmRGlyZWN0aXZlPFQ+IHtcbiAgQElucHV0KCkgbWF0Q2VsbERlZlR5cGUhOiBUW10gfCBPYnNlcnZhYmxlPFRbXT4gfCBNYXRUYWJsZURhdGFTb3VyY2U8VD47XG5cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oXG4gICAgZGlyOiBUeXBlU2FmZU1hdENlbGxEZWZEaXJlY3RpdmU8VD4sXG4gICAgY3R4OiB1bmtub3duLFxuICApOiBjdHggaXMge1xuICAgIC8vIEBleHRlbmRlZCBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9jZGsvdGFibGUvYXBpI0Nka0NlbGxPdXRsZXRSb3dDb250ZXh0XG4gICAgJGltcGxpY2l0OiBUO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgZXZlbjogbnVtYmVyO1xuICAgIGZpcnN0OiBudW1iZXI7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBsYXN0OiBudW1iZXI7XG4gICAgb2RkOiBudW1iZXI7XG4gIH0ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=