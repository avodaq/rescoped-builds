var _MatDatagridRowDirective_itemPayload;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
const HOST_CLASS_PREFIX = 'cdk-datagrid';
export class MatDatagridRowDirective {
    constructor() {
        _MatDatagridRowDirective_itemPayload.set(this, void 0);
    }
    get actionType() {
        return `${HOST_CLASS_PREFIX}-${__classPrivateFieldGet(this, _MatDatagridRowDirective_itemPayload, "f").actionType} ${HOST_CLASS_PREFIX}-group-id-${__classPrivateFieldGet(this, _MatDatagridRowDirective_itemPayload, "f").groupId} ${HOST_CLASS_PREFIX}-parent-${__classPrivateFieldGet(this, _MatDatagridRowDirective_itemPayload, "f").parent}`;
    }
    set item(item) {
        __classPrivateFieldSet(this, _MatDatagridRowDirective_itemPayload, getItemPayload(item), "f");
    }
}
_MatDatagridRowDirective_itemPayload = new WeakMap();
MatDatagridRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MatDatagridRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: MatDatagridRowDirective, selector: "[cdk-datagrid-row]", inputs: { item: "item" }, host: { properties: { "class": "this.actionType" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridRowDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-row]',
                }]
        }], propDecorators: { actionType: [{
                type: HostBinding,
                args: ['class']
            }], item: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFdEQsTUFBTSxpQkFBaUIsR0FBRyxjQUFjLENBQUM7QUFLekMsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQUtFLHVEQUFpQztLQVdsQztJQVRDLElBQTBCLFVBQVU7UUFDbEMsT0FBTyxHQUFHLGlCQUFpQixJQUFJLHVCQUFBLElBQUksNENBQWEsQ0FBQyxVQUFVLElBQUksaUJBQWlCLGFBQzlFLHVCQUFBLElBQUksNENBQWEsQ0FBQyxPQUNwQixJQUFJLGlCQUFpQixXQUFXLHVCQUFBLElBQUksNENBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBYSxJQUFJLENBQUMsSUFBVTtRQUMxQix1QkFBQSxJQUFJLHdDQUFnQixjQUFjLENBQUMsSUFBSSxDQUFDLE1BQUEsQ0FBQztJQUMzQyxDQUFDOzs7b0hBWFUsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzhCQUkyQixVQUFVO3NCQUFuQyxXQUFXO3VCQUFDLE9BQU87Z0JBTVAsSUFBSTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlcic7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcblxuY29uc3QgSE9TVF9DTEFTU19QUkVGSVggPSAnY2RrLWRhdGFncmlkJztcbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjZGstZGF0YWdyaWQtcm93XScsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkUm93RGlyZWN0aXZlPEl0ZW0+IHtcbiAgI2l0ZW1QYXlsb2FkITogSXRlbVBheWxvYWQ8SXRlbT47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBhY3Rpb25UeXBlKCkge1xuICAgIHJldHVybiBgJHtIT1NUX0NMQVNTX1BSRUZJWH0tJHt0aGlzLiNpdGVtUGF5bG9hZC5hY3Rpb25UeXBlfSAke0hPU1RfQ0xBU1NfUFJFRklYfS1ncm91cC1pZC0ke1xuICAgICAgdGhpcy4jaXRlbVBheWxvYWQuZ3JvdXBJZFxuICAgIH0gJHtIT1NUX0NMQVNTX1BSRUZJWH0tcGFyZW50LSR7dGhpcy4jaXRlbVBheWxvYWQucGFyZW50fWA7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaXRlbShpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy4jaXRlbVBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgfVxufVxuIl19