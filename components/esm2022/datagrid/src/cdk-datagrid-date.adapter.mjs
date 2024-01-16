import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
export const MAT_FORMAT_DATE_INPUT = new InjectionToken('dateFormatValue');
export const MAT_DATE_CLASS = new InjectionToken('matDateAdapter');
export const matDateFormatsDefaults = {
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
    parse: {
        dateInput: ['YYYY-MM-DD'],
    },
};
export class CdkDatagridDateAdapter {
    constructor(matDateClass, matDateFormats, matFormatDateInput, _dateAdapter) {
        this.matDateClass = matDateClass;
        this.matDateFormats = matDateFormats;
        this.matFormatDateInput = matFormatDateInput;
        this._dateAdapter = _dateAdapter;
    }
    format(date, format) {
        if (!date)
            return '';
        return this._dateAdapter.format(this.matDateClass(date), format);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridDateAdapter, deps: [{ token: MAT_DATE_CLASS }, { token: MAT_DATE_FORMATS }, { token: MAT_FORMAT_DATE_INPUT }, { token: i1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridDateAdapter }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridDateAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_CLASS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_FORMAT_DATE_INPUT]
                }] }, { type: i1.DateAdapter }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWRhdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWRhdGUuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBa0IsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXZGLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFTLGlCQUFpQixDQUFDLENBQUM7QUFFbkYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFlLGdCQUFnQixDQUFDLENBQUM7QUFNakYsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQW1CO0lBQ3BELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDMUI7Q0FDRixDQUFDO0FBR0YsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUMyQyxZQUEwQixFQUN6QixjQUE4QixFQUN6QixrQkFBMEIsRUFDeEQsWUFBa0M7UUFIVixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO1FBQ3hELGlCQUFZLEdBQVosWUFBWSxDQUFzQjtJQUNsRCxDQUFDO0lBRUosTUFBTSxDQUFDLElBQTZCLEVBQUUsTUFBYztRQUNsRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDOzhHQVhVLHNCQUFzQixrQkFFdkIsY0FBYyxhQUNkLGdCQUFnQixhQUNoQixxQkFBcUI7a0hBSnBCLHNCQUFzQjs7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVTs7MEJBR04sTUFBTTsyQkFBQyxjQUFjOzswQkFDckIsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUN2QixNQUFNOzJCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNYXREYXRlRm9ybWF0cywgTUFUX0RBVEVfRk9STUFUUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTUFUX0ZPUk1BVF9EQVRFX0lOUFVUID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2RhdGVGb3JtYXRWYWx1ZScpO1xuXG5leHBvcnQgY29uc3QgTUFUX0RBVEVfQ0xBU1MgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWF0RGF0ZUNsYXNzPignbWF0RGF0ZUFkYXB0ZXInKTtcblxuZXhwb3J0IHR5cGUgTWF0RGF0ZUNsYXNzID0gKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duO1xuXG5pbnRlcmZhY2UgRGF0ZUFkYXB0ZXJGb3JtYXR0ZXIgZXh0ZW5kcyBQaWNrPERhdGVBZGFwdGVyPHVua25vd24+LCAnZm9ybWF0Jz4ge31cblxuZXhwb3J0IGNvbnN0IG1hdERhdGVGb3JtYXRzRGVmYXVsdHM6IE1hdERhdGVGb3JtYXRzID0ge1xuICBkaXNwbGF5OiB7XG4gICAgZGF0ZUlucHV0OiAnWVlZWS1NTS1ERCcsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxuICBwYXJzZToge1xuICAgIGRhdGVJbnB1dDogWydZWVlZLU1NLUREJ10sXG4gIH0sXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWREYXRlQWRhcHRlciBpbXBsZW1lbnRzIERhdGVBZGFwdGVyRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChNQVRfREFURV9DTEFTUykgcHJpdmF0ZSByZWFkb25seSBtYXREYXRlQ2xhc3M6IE1hdERhdGVDbGFzcyxcbiAgICBASW5qZWN0KE1BVF9EQVRFX0ZPUk1BVFMpIHB1YmxpYyByZWFkb25seSBtYXREYXRlRm9ybWF0czogTWF0RGF0ZUZvcm1hdHMsXG4gICAgQEluamVjdChNQVRfRk9STUFUX0RBVEVfSU5QVVQpIHB1YmxpYyByZWFkb25seSBtYXRGb3JtYXREYXRlSW5wdXQ6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8dW5rbm93bj4sXG4gICkge31cblxuICBmb3JtYXQoZGF0ZTogRGF0ZSB8IHN0cmluZyB8IHVua25vd24sIGZvcm1hdDogc3RyaW5nKSB7XG4gICAgaWYgKCFkYXRlKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyLmZvcm1hdCh0aGlzLm1hdERhdGVDbGFzcyhkYXRlKSwgZm9ybWF0KTtcbiAgfVxufVxuIl19