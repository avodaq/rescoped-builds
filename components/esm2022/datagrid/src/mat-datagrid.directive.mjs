import { Directive, HostBinding } from '@angular/core';
import { CdkDatagridDirective } from './cdk-datagrid.directive';
import * as i0 from "@angular/core";
export class MatDatagridDirective extends CdkDatagridDirective {
    constructor() {
        super(...arguments);
        this.hostClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: MatDatagridDirective, isStandalone: true, selector: "mat-table[mat-datagrid]", host: { properties: { "class.mat-datagrid": "this.hostClass" } }, exportAs: ["matDatagrid"], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'mat-table[mat-datagrid]',
                    exportAs: 'matDatagrid',
                    standalone: true,
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvbWF0LWRhdGFncmlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFRaEUsTUFBTSxPQUFPLG9CQUFtRCxTQUFRLG9CQUEwQjtJQU5sRzs7UUFPOEMsY0FBUyxHQUFHLElBQUksQ0FBQztLQUM5RDs4R0FGWSxvQkFBb0I7a0dBQXBCLG9CQUFvQjs7MkZBQXBCLG9CQUFvQjtrQkFOaEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBRTZDLFNBQVM7c0JBQXBELFdBQVc7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXQtdGFibGVbbWF0LWRhdGFncmlkXScsXG4gIGV4cG9ydEFzOiAnbWF0RGF0YWdyaWQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRhZ3JpZERpcmVjdGl2ZTxJdGVtIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0PiBleHRlbmRzIENka0RhdGFncmlkRGlyZWN0aXZlPEl0ZW0+IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQnKSBvdmVycmlkZSBob3N0Q2xhc3MgPSB0cnVlO1xufVxuIl19