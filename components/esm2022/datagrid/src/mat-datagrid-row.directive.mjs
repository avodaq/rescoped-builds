import { Directive, HostBinding, Input } from '@angular/core';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
const HOST_CLASS_PREFIX = 'cdk-datagrid';
export class MatDatagridRowDirective {
    #itemPayload;
    get actionType() {
        return `${HOST_CLASS_PREFIX}-${this.#itemPayload.actionType} ${HOST_CLASS_PREFIX}-group-id-${this.#itemPayload.groupId} ${HOST_CLASS_PREFIX}-parent-${this.#itemPayload.parent}`;
    }
    set item(item) {
        this.#itemPayload = getItemPayload(item);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: MatDatagridRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.9", type: MatDatagridRowDirective, isStandalone: true, selector: "[cdk-datagrid-row]", inputs: { item: "item" }, host: { properties: { "class": "this.actionType" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: MatDatagridRowDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXRELE1BQU0saUJBQWlCLEdBQUcsY0FBYyxDQUFDO0FBTXpDLE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBWSxDQUFxQjtJQUVqQyxJQUEwQixVQUFVO1FBQ2xDLE9BQU8sR0FBRyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsYUFBYSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxpQkFBaUIsV0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25MLENBQUM7SUFFRCxJQUFhLElBQUksQ0FBQyxJQUFVO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7OEdBVFUsdUJBQXVCO2tHQUF2Qix1QkFBdUI7OzJGQUF2Qix1QkFBdUI7a0JBTG5DLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBSTJCLFVBQVU7c0JBQW5DLFdBQVc7dUJBQUMsT0FBTztnQkFJUCxJQUFJO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0YS5tYW5hZ2VyJztcbmltcG9ydCB7IGdldEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuXG5jb25zdCBIT1NUX0NMQVNTX1BSRUZJWCA9ICdjZGstZGF0YWdyaWQnO1xuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Nkay1kYXRhZ3JpZC1yb3ddJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWRSb3dEaXJlY3RpdmU8SXRlbT4ge1xuICAjaXRlbVBheWxvYWQhOiBJdGVtUGF5bG9hZDxJdGVtPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGFjdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIGAke0hPU1RfQ0xBU1NfUFJFRklYfS0ke3RoaXMuI2l0ZW1QYXlsb2FkLmFjdGlvblR5cGV9ICR7SE9TVF9DTEFTU19QUkVGSVh9LWdyb3VwLWlkLSR7dGhpcy4jaXRlbVBheWxvYWQuZ3JvdXBJZH0gJHtIT1NUX0NMQVNTX1BSRUZJWH0tcGFyZW50LSR7dGhpcy4jaXRlbVBheWxvYWQucGFyZW50fWA7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaXRlbShpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy4jaXRlbVBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgfVxufVxuIl19