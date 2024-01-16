import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CdkDatagridCommonDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridCommonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.9", type: CdkDatagridCommonDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { type: "type", autocomplete: "autocomplete" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridCommonDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTVcsU0FBSSxHQUErQixNQUFNLENBQUM7UUFFbkQsa0JBQWEsR0FBRyxLQUFLLENBQUM7S0FRdkI7SUFSQyxhQUFhLENBQVM7SUFFdEIsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBbUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsSUFBYSxZQUFZLENBQUMsS0FBYztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQzs4R0FWVSwwQkFBMEI7a0dBQTFCLDBCQUEwQjs7MkZBQTFCLDBCQUEwQjtrQkFMdEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBT08sWUFBWTtzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Nkay1kYXRhZ3JpZC1lZGl0XScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgdHlwZTogJ3RleHQnIHwgJ251bWJlcicgfCAndGltZScgPSAndGV4dCc7XG5cbiAgI2F1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXG4gIGdldCBhdXRvY29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2F1dG9jb21wbGV0ZSBhcyB1bmtub3duIGFzIGJvb2xlYW47XG4gIH1cbiAgQElucHV0KCkgc2V0IGF1dG9jb21wbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuI2F1dG9jb21wbGV0ZSA9IHZhbHVlID8gJ29uJyA6ICdvZmYnO1xuICB9XG59XG4iXX0=