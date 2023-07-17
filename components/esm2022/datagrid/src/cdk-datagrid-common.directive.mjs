import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
class CdkDatagridCommonDirective {
    constructor() {
        this.type = 'text';
        this.#autocomplete = 'off';
    }
    #autocomplete;
    get autocomplete() {
        return this.#autocomplete;
    }
    set autocomplete(value) {
        this.#autocomplete = value ? 'on' : 'off';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridCommonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridCommonDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { type: "type", autocomplete: "autocomplete" }, ngImport: i0 }); }
}
export { CdkDatagridCommonDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridCommonDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], propDecorators: { type: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVqRCxNQUthLDBCQUEwQjtJQUx2QztRQU1XLFNBQUksR0FBK0IsTUFBTSxDQUFDO1FBRW5ELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0tBUXZCO0lBUkMsYUFBYSxDQUFTO0lBRXRCLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQW1DLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQWEsWUFBWSxDQUFDLEtBQWM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUM7OEdBVlUsMEJBQTBCO2tHQUExQiwwQkFBMEI7O1NBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFPTyxZQUFZO3NCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY2RrLWRhdGFncmlkLWVkaXRdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUge1xuICBASW5wdXQoKSB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICd0aW1lJyA9ICd0ZXh0JztcblxuICAjYXV0b2NvbXBsZXRlID0gJ29mZic7XG5cbiAgZ2V0IGF1dG9jb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jYXV0b2NvbXBsZXRlIGFzIHVua25vd24gYXMgYm9vbGVhbjtcbiAgfVxuICBASW5wdXQoKSBzZXQgYXV0b2NvbXBsZXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy4jYXV0b2NvbXBsZXRlID0gdmFsdWUgPyAnb24nIDogJ29mZic7XG4gIH1cbn1cbiJdfQ==