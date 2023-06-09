var _CdkDatagridDirective_unsub, _CdkDatagridDirective_valueChange;
import { __classPrivateFieldGet } from "tslib";
import { CdkDatagridDataManager, ItemActionIndex, } from './cdk-datagrid-data.manager';
import { CdkDatagridEditManager } from './cdk-datagrid-edit.manager';
import { ChangeDetectorRef, Directive, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { setItemPayload } from './cdk-datagrid.utils';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-data.manager";
import * as i2 from "./cdk-datagrid-rule.manager";
import * as i3 from "./cdk-datagrid-edit.manager";
export class CdkDatagridDirective {
    constructor(_cdr, _dataManager, _ruleManager, _editManager) {
        this._cdr = _cdr;
        this._dataManager = _dataManager;
        this._ruleManager = _ruleManager;
        this._editManager = _editManager;
        _CdkDatagridDirective_unsub.set(this, new Subject());
        this.valueChange = this._dataManager.valueChange$;
        this.currentValueChange = null;
        _CdkDatagridDirective_valueChange.set(this, this._dataManager.valueChange$.pipe(tap(valueChange => (this.currentValueChange = valueChange)), tap(() => this._cdr.markForCheck())));
        this.hostClass = true;
        // @todo: implement this!!!!
        this.density = 'xs';
        this.rowHover = true;
        this.collapsedRows = true;
        this.cellGap = 2;
        this.rowGrouping = false;
        this.groupDesign = '';
    }
    get countSingleItems() {
        return this._dataManager.countSingleItems;
    }
    get countGroupItems() {
        return this._dataManager.countGroupItems;
    }
    get items() {
        return this._dataManager.data;
    }
    get inCellZone() {
        return this._editManager.inCellZone;
    }
    set itemRules(rules) {
        this._ruleManager.setGlobalRules(rules);
    }
    // on click outside of datagrid, the last edited item will be inactivated.
    // @todo: this breaks the skygrid! Dont know why. But we dont need this because
    // setting the last item inactive will be made bey see @HostListener('click', ['$event']) click(e: MouseEvent
    // @HostListener('document:click', ['$event']) documentClick(e: MouseEvent) {
    //   if (!this._editManager.isInZoneEditItem(e)) {
    //     this._editManager.setInactiveLastEditItem();
    //   }
    // }
    click(e) {
        this._editManager.setActiveEditItem(e);
    }
    tab(e) {
        this._editManager.setInactiveLastEditItem();
        e.preventDefault(); // @todo: remove this later when keyboard navigation is implemented!
    }
    esc(e) {
        // console.log('keyup.esc', e);
    }
    arrowKey(e) {
        // console.log('keydown', e);
    }
    enter(e) {
        // console.log('keydown.enter', e);
    }
    shiftEnter(e) {
        // console.log('keydown.shift.enter', e);
    }
    shiftTab(e) {
        // console.log('keydown.shift.tab', e);
    }
    setValue(key, value, actionType, where = 'dataSource') {
        const item = setItemPayload({}, { actionType });
        if (where === 'dataSource') {
            this._dataManager.setValue(key, value, item);
        }
    }
    setValueChange(valueChange) {
        this._dataManager.setValueChange(valueChange);
    }
    /**
     * This method is useful when you want to add dynamic a runtime an item to the table.
     */
    activeMetaRow(active, actionType) {
        this._dataManager.addDataSlotItem({
            index: ItemActionIndex.rowGlobal,
            id: actionType,
            active,
            actionType,
        });
    }
    ngOnInit() {
        this._dataManager.dataSource = this.dataSource;
        __classPrivateFieldGet(this, _CdkDatagridDirective_valueChange, "f").pipe(takeUntil(__classPrivateFieldGet(this, _CdkDatagridDirective_unsub, "f"))).subscribe();
    }
    ngOnDestroy() {
        __classPrivateFieldGet(this, _CdkDatagridDirective_unsub, "f").next();
        __classPrivateFieldGet(this, _CdkDatagridDirective_unsub, "f").complete();
        this._dataManager.destroy();
    }
}
_CdkDatagridDirective_unsub = new WeakMap(), _CdkDatagridDirective_valueChange = new WeakMap();
CdkDatagridDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.CdkDatagridDataManager }, { token: i2.CdkDatagridRuleManager }, { token: i3.CdkDatagridEditManager }], target: i0.ɵɵFactoryTarget.Directive });
CdkDatagridDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: CdkDatagridDirective, selector: "cdk-table[cdk-datagrid]", inputs: { density: "density", rowHover: "rowHover", collapsedRows: "collapsedRows", cellGap: "cellGap", rowGrouping: "rowGrouping", groupDesign: "groupDesign", dataSource: "dataSource", itemRules: "itemRules" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "click": "click($event)", "keydown.tab": "tab($event)", "keyup.esc": "esc($event)", "keydown": "arrowKey($event)", "keydown.enter": "enter($event)", "keydown.shift.enter": "shiftEnter($event)", "keydown.shift.tab": "shiftTab($event)" }, properties: { "class.cdk-datagrid": "this.hostClass" } }, exportAs: ["cdkDatagrid"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'cdk-table[cdk-datagrid]',
                    exportAs: 'cdkDatagrid',
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.CdkDatagridDataManager }, { type: i2.CdkDatagridRuleManager }, { type: i3.CdkDatagridEditManager }]; }, propDecorators: { valueChange: [{
                type: Output
            }], hostClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid']
            }], density: [{
                type: Input
            }], rowHover: [{
                type: Input
            }], collapsedRows: [{
                type: Input
            }], cellGap: [{
                type: Input
            }], rowGrouping: [{
                type: Input
            }], groupDesign: [{
                type: Input
            }], dataSource: [{
                type: Input
            }], itemRules: [{
                type: Input
            }], click: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], tab: [{
                type: HostListener,
                args: ['keydown.tab', ['$event']]
            }], esc: [{
                type: HostListener,
                args: ['keyup.esc', ['$event']]
            }], arrowKey: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], enter: [{
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }], shiftEnter: [{
                type: HostListener,
                args: ['keydown.shift.enter', ['$event']]
            }], shiftTab: [{
                type: HostListener,
                args: ['keydown.shift.tab', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsZUFBZSxHQUdoQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztBQWEvQixNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQ21CLElBQXVCLEVBQ3ZCLFlBQTBDLEVBQzFDLFlBQTBDLEVBQzFDLFlBQWlEO1FBSGpELFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7UUFDMUMsaUJBQVksR0FBWixZQUFZLENBQXFDO1FBR3BFLHNDQUFTLElBQUksT0FBTyxFQUFRLEVBQUM7UUFrQlYsZ0JBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUVoRSx1QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBQzlDLDRDQUF3QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJ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ZSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUlRLFVBQVU7c0JBQTFELFlBQVk7dUJBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBSUEsUUFBUTtzQkFBdEQsWUFBWTt1QkFBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENka0RhdGFncmlkRGF0YU1hbmFnZXIsXG4gIEdsb2JhbFJ1bGVzLFxuICBJdGVtQWN0aW9uSW5kZXgsXG4gIEl0ZW1BY3Rpb25UeXBlLFxuICBWYWx1ZUNoYW5nZSxcbn0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0YS5tYW5hZ2VyJztcbmltcG9ydCB7IENka0RhdGFncmlkRWRpdE1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0Lm1hbmFnZXInO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlcic7XG5pbXBvcnQgeyBzZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcbmltcG9ydCB7IFRhYmxlVmlydHVhbFNjcm9sbERhdGFTb3VyY2UgfSBmcm9tICduZy10YWJsZS12aXJ0dWFsLXNjcm9sbCc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLy8gTURDXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCB0eXBlIERlbnNpdHkgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnO1xuZXhwb3J0IHR5cGUgQ2VsbEdhcCA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnY2RrLXRhYmxlW2Nkay1kYXRhZ3JpZF0nLFxuICBleHBvcnRBczogJ2Nka0RhdGFncmlkJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWREaXJlY3RpdmU8SXRlbT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0YU1hbmFnZXI6IENka0RhdGFncmlkRGF0YU1hbmFnZXI8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcnVsZU1hbmFnZXI6IENka0RhdGFncmlkUnVsZU1hbmFnZXI8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWRpdE1hbmFnZXI6IENka0RhdGFncmlkRWRpdE1hbmFnZXI8SFRNTEVsZW1lbnQ+LFxuICApIHt9XG5cbiAgI3Vuc3ViID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgY291bnRTaW5nbGVJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YU1hbmFnZXIuY291bnRTaW5nbGVJdGVtcztcbiAgfVxuXG4gIGdldCBjb3VudEdyb3VwSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFNYW5hZ2VyLmNvdW50R3JvdXBJdGVtcztcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YU1hbmFnZXIuZGF0YTtcbiAgfVxuXG4gIGdldCBpbkNlbGxab25lKCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0TWFuYWdlci5pbkNlbGxab25lO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gdGhpcy5fZGF0YU1hbmFnZXIudmFsdWVDaGFuZ2UkO1xuXG4gIGN1cnJlbnRWYWx1ZUNoYW5nZTogVmFsdWVDaGFuZ2UgfCBudWxsID0gbnVsbDtcbiAgcmVhZG9ubHkgI3ZhbHVlQ2hhbmdlID0gdGhpcy5fZGF0YU1hbmFnZXIudmFsdWVDaGFuZ2UkLnBpcGUoXG4gICAgdGFwKHZhbHVlQ2hhbmdlID0+ICh0aGlzLmN1cnJlbnRWYWx1ZUNoYW5nZSA9IHZhbHVlQ2hhbmdlKSksXG4gICAgdGFwKCgpID0+IHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKSksXG4gICk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jZGstZGF0YWdyaWQnKSBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIC8vIEB0b2RvOiBpbXBsZW1lbnQgdGhpcyEhISFcbiAgQElucHV0KCkgZGVuc2l0eTogRGVuc2l0eSA9ICd4cyc7XG4gIEBJbnB1dCgpIHJvd0hvdmVyID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sbGFwc2VkUm93cyA9IHRydWU7XG4gIEBJbnB1dCgpIGNlbGxHYXA6IENlbGxHYXAgPSAyO1xuICBASW5wdXQoKSByb3dHcm91cGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBncm91cERlc2lnbjogJ2JtJyB8ICcnID0gJyc7XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZSE6IFRhYmxlVmlydHVhbFNjcm9sbERhdGFTb3VyY2U8SXRlbT4gfCBNYXRUYWJsZURhdGFTb3VyY2U8SXRlbT47XG4gIEBJbnB1dCgpIHNldCBpdGVtUnVsZXMocnVsZXM6IEdsb2JhbFJ1bGVzPEl0ZW0+KSB7XG4gICAgdGhpcy5fcnVsZU1hbmFnZXIuc2V0R2xvYmFsUnVsZXMocnVsZXMpO1xuICB9XG5cbiAgLy8gb24gY2xpY2sgb3V0c2lkZSBvZiBkYXRhZ3JpZCwgdGhlIGxhc3QgZWRpdGVkIGl0ZW0gd2lsbCBiZSBpbmFjdGl2YXRlZC5cbiAgLy8gQHRvZG86IHRoaXMgYnJlYWtzIHRoZSBza3lncmlkISBEb250IGtub3cgd2h5LiBCdXQgd2UgZG9udCBuZWVkIHRoaXMgYmVjYXVzZVxuICAvLyBzZXR0aW5nIHRoZSBsYXN0IGl0ZW0gaW5hY3RpdmUgd2lsbCBiZSBtYWRlIGJleSBzZWUgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBjbGljayhlOiBNb3VzZUV2ZW50XG4gIC8vIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgZG9jdW1lbnRDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gIC8vICAgaWYgKCF0aGlzLl9lZGl0TWFuYWdlci5pc0luWm9uZUVkaXRJdGVtKGUpKSB7XG4gIC8vICAgICB0aGlzLl9lZGl0TWFuYWdlci5zZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgY2xpY2soZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMuX2VkaXRNYW5hZ2VyLnNldEFjdGl2ZUVkaXRJdGVtKGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi50YWInLCBbJyRldmVudCddKSB0YWIoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuX2VkaXRNYW5hZ2VyLnNldEluYWN0aXZlTGFzdEVkaXRJdGVtKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBAdG9kbzogcmVtb3ZlIHRoaXMgbGF0ZXIgd2hlbiBrZXlib2FyZCBuYXZpZ2F0aW9uIGlzIGltcGxlbWVudGVkIVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjJywgWyckZXZlbnQnXSkgZXNjKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5dXAuZXNjJywgZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgYXJyb3dLZXkoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdrZXlkb3duJywgZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSkgZW50ZXIoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdrZXlkb3duLmVudGVyJywgZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LmVudGVyJywgWyckZXZlbnQnXSkgc2hpZnRFbnRlcihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2tleWRvd24uc2hpZnQuZW50ZXInLCBlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc2hpZnQudGFiJywgWyckZXZlbnQnXSkgc2hpZnRUYWIoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdrZXlkb3duLnNoaWZ0LnRhYicsIGUpO1xuICB9XG5cbiAgc2V0VmFsdWU8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0+KFxuICAgIGtleTogSXRlbUtleSxcbiAgICB2YWx1ZTogSXRlbVtJdGVtS2V5XSxcbiAgICBhY3Rpb25UeXBlOiBJdGVtQWN0aW9uVHlwZSxcbiAgICB3aGVyZTogJ2RhdGFTb3VyY2UnIHwgJ2Zvcm1Tb3VyY2UnID0gJ2RhdGFTb3VyY2UnLFxuICApIHtcbiAgICBjb25zdCBpdGVtID0gc2V0SXRlbVBheWxvYWQoe30sIHsgYWN0aW9uVHlwZSB9KSBhcyBJdGVtO1xuICAgIGlmICh3aGVyZSA9PT0gJ2RhdGFTb3VyY2UnKSB7XG4gICAgICB0aGlzLl9kYXRhTWFuYWdlci5zZXRWYWx1ZShrZXksIHZhbHVlLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZUNoYW5nZSh2YWx1ZUNoYW5nZTogVmFsdWVDaGFuZ2UgfCBudWxsKSB7XG4gICAgdGhpcy5fZGF0YU1hbmFnZXIuc2V0VmFsdWVDaGFuZ2UodmFsdWVDaGFuZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIGFkZCBkeW5hbWljIGEgcnVudGltZSBhbiBpdGVtIHRvIHRoZSB0YWJsZS5cbiAgICovXG4gIGFjdGl2ZU1ldGFSb3coYWN0aXZlOiBib29sZWFuLCBhY3Rpb25UeXBlOiBJdGVtQWN0aW9uVHlwZSkge1xuICAgIHRoaXMuX2RhdGFNYW5hZ2VyLmFkZERhdGFTbG90SXRlbSh7XG4gICAgICBpbmRleDogSXRlbUFjdGlvbkluZGV4LnJvd0dsb2JhbCxcbiAgICAgIGlkOiBhY3Rpb25UeXBlLFxuICAgICAgYWN0aXZlLFxuICAgICAgYWN0aW9uVHlwZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2RhdGFNYW5hZ2VyLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlPEl0ZW0+O1xuICAgIHRoaXMuI3ZhbHVlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuI3Vuc3ViKSkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLiN1bnN1Yi5uZXh0KCk7XG4gICAgdGhpcy4jdW5zdWIuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kYXRhTWFuYWdlci5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==