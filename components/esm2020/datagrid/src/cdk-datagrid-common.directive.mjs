var _CdkDatagridCommonDirective_autocomplete;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CdkDatagridCommonDirective {
    constructor() {
        this.type = 'text';
        _CdkDatagridCommonDirective_autocomplete.set(this, 'off');
    }
    get autocomplete() {
        return __classPrivateFieldGet(this, _CdkDatagridCommonDirective_autocomplete, "f");
    }
    set autocomplete(value) {
        __classPrivateFieldSet(this, _CdkDatagridCommonDirective_autocomplete, value ? 'on' : 'off', "f");
    }
}
_CdkDatagridCommonDirective_autocomplete = new WeakMap();
CdkDatagridCommonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridCommonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CdkDatagridCommonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: CdkDatagridCommonDirective, selector: "[cdk-datagrid-edit]", inputs: { type: "type", autocomplete: "autocomplete" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridCommonDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                }]
        }], propDecorators: { type: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWpELE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLVyxTQUFJLEdBQStCLE1BQU0sQ0FBQztRQUVuRCxtREFBZ0IsS0FBSyxFQUFDO0tBUXZCO0lBTkMsSUFBSSxZQUFZO1FBQ2QsT0FBTyx1QkFBQSxJQUFJLGdEQUFvQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFhLFlBQVksQ0FBQyxLQUFjO1FBQ3RDLHVCQUFBLElBQUksNENBQWlCLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQUEsQ0FBQztJQUM1QyxDQUFDOzs7dUhBVlUsMEJBQTBCOzJHQUExQiwwQkFBMEI7MkZBQTFCLDBCQUEwQjtrQkFKdEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFPTyxZQUFZO3NCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY2RrLWRhdGFncmlkLWVkaXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUge1xuICBASW5wdXQoKSB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICd0aW1lJyA9ICd0ZXh0JztcblxuICAjYXV0b2NvbXBsZXRlID0gJ29mZic7XG5cbiAgZ2V0IGF1dG9jb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jYXV0b2NvbXBsZXRlIGFzIHVua25vd24gYXMgYm9vbGVhbjtcbiAgfVxuICBASW5wdXQoKSBzZXQgYXV0b2NvbXBsZXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy4jYXV0b2NvbXBsZXRlID0gdmFsdWUgPyAnb24nIDogJ29mZic7XG4gIH1cbn1cbiJdfQ==