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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridCommonDirective, selector: "[cdk-datagrid-edit]", inputs: { type: "type", autocomplete: "autocomplete" }, ngImport: i0 }); }
}
export { CdkDatagridCommonDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridCommonDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVqRCxNQUlhLDBCQUEwQjtJQUp2QztRQUtXLFNBQUksR0FBK0IsTUFBTSxDQUFDO1FBRW5ELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0tBUXZCO0lBUkMsYUFBYSxDQUFTO0lBRXRCLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQW1DLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQWEsWUFBWSxDQUFDLEtBQWM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUM7OEdBVlUsMEJBQTBCO2tHQUExQiwwQkFBMEI7O1NBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQUp0QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQU9PLFlBQVk7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjZGstZGF0YWdyaWQtZWRpdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdudW1iZXInIHwgJ3RpbWUnID0gJ3RleHQnO1xuXG4gICNhdXRvY29tcGxldGUgPSAnb2ZmJztcblxuICBnZXQgYXV0b2NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLiNhdXRvY29tcGxldGUgYXMgdW5rbm93biBhcyBib29sZWFuO1xuICB9XG4gIEBJbnB1dCgpIHNldCBhdXRvY29tcGxldGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLiNhdXRvY29tcGxldGUgPSB2YWx1ZSA/ICdvbicgOiAnb2ZmJztcbiAgfVxufVxuIl19