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
class CdkDatagridDateAdapter {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridDateAdapter, deps: [{ token: MAT_DATE_CLASS }, { token: MAT_DATE_FORMATS }, { token: MAT_FORMAT_DATE_INPUT }, { token: i1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridDateAdapter }); }
}
export { CdkDatagridDateAdapter };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridDateAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_CLASS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_FORMAT_DATE_INPUT]
                }] }, { type: i1.DateAdapter }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWRhdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWRhdGUuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBa0IsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXZGLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFTLGlCQUFpQixDQUFDLENBQUM7QUFFbkYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFlLGdCQUFnQixDQUFDLENBQUM7QUFNakYsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQW1CO0lBQ3BELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDMUI7Q0FDRixDQUFDO0FBRUYsTUFDYSxzQkFBc0I7SUFDakMsWUFDMkMsWUFBMEIsRUFDekIsY0FBOEIsRUFDekIsa0JBQTBCLEVBQ3hELFlBQWtDO1FBSFYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUN4RCxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7SUFDbEQsQ0FBQztJQUVKLE1BQU0sQ0FBQyxJQUE2QixFQUFFLE1BQWM7UUFDbEQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs4R0FYVSxzQkFBc0Isa0JBRXZCLGNBQWMsYUFDZCxnQkFBZ0IsYUFDaEIscUJBQXFCO2tIQUpwQixzQkFBc0I7O1NBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVOzswQkFHTixNQUFNOzJCQUFDLGNBQWM7OzBCQUNyQixNQUFNOzJCQUFDLGdCQUFnQjs7MEJBQ3ZCLE1BQU07MkJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1hdERhdGVGb3JtYXRzLCBNQVRfREFURV9GT1JNQVRTIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBNQVRfRk9STUFUX0RBVEVfSU5QVVQgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignZGF0ZUZvcm1hdFZhbHVlJyk7XG5cbmV4cG9ydCBjb25zdCBNQVRfREFURV9DTEFTUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNYXREYXRlQ2xhc3M+KCdtYXREYXRlQWRhcHRlcicpO1xuXG5leHBvcnQgdHlwZSBNYXREYXRlQ2xhc3MgPSAodmFsdWU6IHVua25vd24pID0+IHVua25vd247XG5cbmludGVyZmFjZSBEYXRlQWRhcHRlckZvcm1hdHRlciBleHRlbmRzIFBpY2s8RGF0ZUFkYXB0ZXI8dW5rbm93bj4sICdmb3JtYXQnPiB7fVxuXG5leHBvcnQgY29uc3QgbWF0RGF0ZUZvcm1hdHNEZWZhdWx0czogTWF0RGF0ZUZvcm1hdHMgPSB7XG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdZWVlZLU1NLUREJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiBbJ1lZWVktTU0tREQnXSxcbiAgfSxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZERhdGVBZGFwdGVyIGltcGxlbWVudHMgRGF0ZUFkYXB0ZXJGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE1BVF9EQVRFX0NMQVNTKSBwcml2YXRlIHJlYWRvbmx5IG1hdERhdGVDbGFzczogTWF0RGF0ZUNsYXNzLFxuICAgIEBJbmplY3QoTUFUX0RBVEVfRk9STUFUUykgcHVibGljIHJlYWRvbmx5IG1hdERhdGVGb3JtYXRzOiBNYXREYXRlRm9ybWF0cyxcbiAgICBASW5qZWN0KE1BVF9GT1JNQVRfREFURV9JTlBVVCkgcHVibGljIHJlYWRvbmx5IG1hdEZvcm1hdERhdGVJbnB1dDogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjx1bmtub3duPixcbiAgKSB7fVxuXG4gIGZvcm1hdChkYXRlOiBEYXRlIHwgc3RyaW5nIHwgdW5rbm93biwgZm9ybWF0OiBzdHJpbmcpIHtcbiAgICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXIuZm9ybWF0KHRoaXMubWF0RGF0ZUNsYXNzKGRhdGUpLCBmb3JtYXQpO1xuICB9XG59XG4iXX0=