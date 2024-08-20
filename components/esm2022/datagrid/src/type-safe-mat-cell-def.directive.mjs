import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
// @credits: https://nartc.me/blog/typed-mat-cell-def
export class TypeSafeMatCellDefDirective {
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: TypeSafeMatCellDefDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: TypeSafeMatCellDefDirective, isStandalone: true, selector: "[matCellDef],[cdkCellDef]", inputs: { matCellDefType: "matCellDefType" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: TypeSafeMatCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[matCellDef],[cdkCellDef]',
                    standalone: true,
                }]
        }], propDecorators: { matCellDefType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1zYWZlLW1hdC1jZWxsLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL3R5cGUtc2FmZS1tYXQtY2VsbC1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU1qRCxxREFBcUQ7QUFNckQsTUFBTSxPQUFPLDJCQUEyQjtJQUd0QyxNQUFNLENBQUMsc0JBQXNCLENBQzNCLEdBQW1DLEVBQ25DLEdBQVk7UUFXWixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OEdBakJVLDJCQUEyQjtrR0FBM0IsMkJBQTJCOzsyRkFBM0IsMkJBQTJCO2tCQUx2QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLGNBQWM7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8vIE1EQ1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG4vLyBAY3JlZGl0czogaHR0cHM6Ly9uYXJ0Yy5tZS9ibG9nL3R5cGVkLW1hdC1jZWxsLWRlZlxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW21hdENlbGxEZWZdLFtjZGtDZWxsRGVmXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVTYWZlTWF0Q2VsbERlZkRpcmVjdGl2ZTxUPiB7XG4gIEBJbnB1dCgpIG1hdENlbGxEZWZUeXBlITogVFtdIHwgT2JzZXJ2YWJsZTxUW10+IHwgTWF0VGFibGVEYXRhU291cmNlPFQ+O1xuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KFxuICAgIGRpcjogVHlwZVNhZmVNYXRDZWxsRGVmRGlyZWN0aXZlPFQ+LFxuICAgIGN0eDogdW5rbm93bixcbiAgKTogY3R4IGlzIHtcbiAgICAvLyBAZXh0ZW5kZWQgZnJvbSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vY2RrL3RhYmxlL2FwaSNDZGtDZWxsT3V0bGV0Um93Q29udGV4dFxuICAgICRpbXBsaWNpdDogVDtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIGV2ZW46IG51bWJlcjtcbiAgICBmaXJzdDogbnVtYmVyO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgbGFzdDogbnVtYmVyO1xuICAgIG9kZDogbnVtYmVyO1xuICB9IHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19