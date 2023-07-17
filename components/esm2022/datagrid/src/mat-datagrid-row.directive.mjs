import { Directive, HostBinding, Input } from '@angular/core';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
const HOST_CLASS_PREFIX = 'cdk-datagrid';
class MatDatagridRowDirective {
    #itemPayload;
    get actionType() {
        return `${HOST_CLASS_PREFIX}-${this.#itemPayload.actionType} ${HOST_CLASS_PREFIX}-group-id-${this.#itemPayload.groupId} ${HOST_CLASS_PREFIX}-parent-${this.#itemPayload.parent}`;
    }
    set item(item) {
        this.#itemPayload = getItemPayload(item);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridRowDirective, isStandalone: true, selector: "[cdk-datagrid-row]", inputs: { item: "item" }, host: { properties: { "class": "this.actionType" } }, ngImport: i0 }); }
}
export { MatDatagridRowDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridRowDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-row]',
                    standalone: true,
                }]
        }], propDecorators: { actionType: [{
                type: HostBinding,
                args: ['class']
            }], item: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXRELE1BQU0saUJBQWlCLEdBQUcsY0FBYyxDQUFDO0FBQ3pDLE1BS2EsdUJBQXVCO0lBQ2xDLFlBQVksQ0FBcUI7SUFFakMsSUFBMEIsVUFBVTtRQUNsQyxPQUFPLEdBQUcsaUJBQWlCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLElBQUksaUJBQWlCLGFBQzlFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FDcEIsSUFBSSxpQkFBaUIsV0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFhLElBQUksQ0FBQyxJQUFVO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7OEdBWFUsdUJBQXVCO2tHQUF2Qix1QkFBdUI7O1NBQXZCLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQUxuQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUkyQixVQUFVO3NCQUFuQyxXQUFXO3VCQUFDLE9BQU87Z0JBTVAsSUFBSTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlcic7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcblxuY29uc3QgSE9TVF9DTEFTU19QUkVGSVggPSAnY2RrLWRhdGFncmlkJztcbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjZGstZGF0YWdyaWQtcm93XScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkUm93RGlyZWN0aXZlPEl0ZW0+IHtcbiAgI2l0ZW1QYXlsb2FkITogSXRlbVBheWxvYWQ8SXRlbT47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBhY3Rpb25UeXBlKCkge1xuICAgIHJldHVybiBgJHtIT1NUX0NMQVNTX1BSRUZJWH0tJHt0aGlzLiNpdGVtUGF5bG9hZC5hY3Rpb25UeXBlfSAke0hPU1RfQ0xBU1NfUFJFRklYfS1ncm91cC1pZC0ke1xuICAgICAgdGhpcy4jaXRlbVBheWxvYWQuZ3JvdXBJZFxuICAgIH0gJHtIT1NUX0NMQVNTX1BSRUZJWH0tcGFyZW50LSR7dGhpcy4jaXRlbVBheWxvYWQucGFyZW50fWA7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaXRlbShpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy4jaXRlbVBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgfVxufVxuIl19