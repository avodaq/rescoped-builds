import { Directive, HostBinding } from '@angular/core';
import { CdkDatagridDirective } from './cdk-datagrid.directive';
import * as i0 from "@angular/core";
class MatDatagridDirective extends CdkDatagridDirective {
    constructor() {
        super(...arguments);
        this.hostClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridDirective, isStandalone: true, selector: "mat-table[mat-datagrid]", host: { properties: { "class.mat-datagrid": "this.hostClass" } }, exportAs: ["matDatagrid"], usesInheritance: true, ngImport: i0 }); }
}
export { MatDatagridDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvbWF0LWRhdGFncmlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFaEUsTUFNYSxvQkFBbUQsU0FBUSxvQkFBMEI7SUFObEc7O1FBTzhDLGNBQVMsR0FBRyxJQUFJLENBQUM7S0FDOUQ7OEdBRlksb0JBQW9CO2tHQUFwQixvQkFBb0I7O1NBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQU5oQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFNkMsU0FBUztzQkFBcEQsV0FBVzt1QkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hdC10YWJsZVttYXQtZGF0YWdyaWRdJyxcbiAgZXhwb3J0QXM6ICdtYXREYXRhZ3JpZCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkRGlyZWN0aXZlPEl0ZW0gZXh0ZW5kcyBvYmplY3QgPSBvYmplY3Q+IGV4dGVuZHMgQ2RrRGF0YWdyaWREaXJlY3RpdmU8SXRlbT4ge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZCcpIG92ZXJyaWRlIGhvc3RDbGFzcyA9IHRydWU7XG59XG4iXX0=