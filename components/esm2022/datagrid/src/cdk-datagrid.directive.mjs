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
class CdkDatagridDirective {
    constructor(_cdr, _dataManager, _ruleManager, _editManager) {
        this._cdr = _cdr;
        this._dataManager = _dataManager;
        this._ruleManager = _ruleManager;
        this._editManager = _editManager;
        this.#unsub = new Subject();
        this.valueChange = this._dataManager.valueChange$;
        this.currentValueChange = null;
        this.#valueChange = this._dataManager.valueChange$.pipe(tap(valueChange => (this.currentValueChange = valueChange)), tap(() => this._cdr.markForCheck()));
        this.hostClass = true;
        // @todo: implement this!!!!
        this.density = 'xs';
        this.rowHover = true;
        this.collapsedRows = true;
        this.cellGap = 2;
        this.rowGrouping = false;
        this.groupDesign = '';
    }
    #unsub;
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
    #valueChange;
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
        this.#valueChange.pipe(takeUntil(this.#unsub)).subscribe();
    }
    ngOnDestroy() {
        this.#unsub.next();
        this.#unsub.complete();
        this._dataManager.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.CdkDatagridDataManager }, { token: i2.CdkDatagridRuleManager }, { token: i3.CdkDatagridEditManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridDirective, selector: "cdk-table[cdk-datagrid]", inputs: { density: "density", rowHover: "rowHover", collapsedRows: "collapsedRows", cellGap: "cellGap", rowGrouping: "rowGrouping", groupDesign: "groupDesign", dataSource: "dataSource", itemRules: "itemRules" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "click": "click($event)", "keydown.tab": "tab($event)", "keyup.esc": "esc($event)", "keydown": "arrowKey($event)", "keydown.enter": "enter($event)", "keydown.shift.enter": "shiftEnter($event)", "keydown.shift.tab": "shiftTab($event)" }, properties: { "class.cdk-datagrid": "this.hostClass" } }, exportAs: ["cdkDatagrid"], ngImport: i0 }); }
}
export { CdkDatagridDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLGVBQWUsR0FHaEIsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFRL0IsTUFLYSxvQkFBb0I7SUFDL0IsWUFDbUIsSUFBdUIsRUFDdkIsWUFBMEMsRUFDMUMsWUFBMEMsRUFDMUMsWUFBaUQ7UUFIakQsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQThCO1FBQzFDLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUM7UUFHcEUsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFrQlYsZ0JBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUVoRSx1QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFB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Q0FBQztnQkFJUSxLQUFLO3NCQUEvQyxZQUFZO3VCQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFJUSxVQUFVO3NCQUExRCxZQUFZO3VCQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUlBLFFBQVE7c0JBQXRELFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyLFxuICBHbG9iYWxSdWxlcyxcbiAgSXRlbUFjdGlvbkluZGV4LFxuICBJdGVtQWN0aW9uVHlwZSxcbiAgVmFsdWVDaGFuZ2UsXG59IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlcic7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5tYW5hZ2VyJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgc2V0SXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5pbXBvcnQgeyBUYWJsZVZpcnR1YWxTY3JvbGxEYXRhU291cmNlIH0gZnJvbSAnbmctdGFibGUtdmlydHVhbC1zY3JvbGwnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8vIE1EQ1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgdHlwZSBEZW5zaXR5ID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJztcbmV4cG9ydCB0eXBlIENlbGxHYXAgPSAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2Nkay10YWJsZVtjZGstZGF0YWdyaWRdJyxcbiAgZXhwb3J0QXM6ICdjZGtEYXRhZ3JpZCcsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRGlyZWN0aXZlPEl0ZW0+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGFNYW5hZ2VyOiBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3J1bGVNYW5hZ2VyOiBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VkaXRNYW5hZ2VyOiBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyPEhUTUxFbGVtZW50PixcbiAgKSB7fVxuXG4gICN1bnN1YiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGNvdW50U2luZ2xlSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFNYW5hZ2VyLmNvdW50U2luZ2xlSXRlbXM7XG4gIH1cblxuICBnZXQgY291bnRHcm91cEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhTWFuYWdlci5jb3VudEdyb3VwSXRlbXM7XG4gIH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFNYW5hZ2VyLmRhdGE7XG4gIH1cblxuICBnZXQgaW5DZWxsWm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdE1hbmFnZXIuaW5DZWxsWm9uZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IHRoaXMuX2RhdGFNYW5hZ2VyLnZhbHVlQ2hhbmdlJDtcblxuICBjdXJyZW50VmFsdWVDaGFuZ2U6IFZhbHVlQ2hhbmdlIHwgbnVsbCA9IG51bGw7XG4gIHJlYWRvbmx5ICN2YWx1ZUNoYW5nZSA9IHRoaXMuX2RhdGFNYW5hZ2VyLnZhbHVlQ2hhbmdlJC5waXBlKFxuICAgIHRhcCh2YWx1ZUNoYW5nZSA9PiAodGhpcy5jdXJyZW50VmFsdWVDaGFuZ2UgPSB2YWx1ZUNoYW5nZSkpLFxuICAgIHRhcCgoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpLFxuICApO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2RrLWRhdGFncmlkJykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICAvLyBAdG9kbzogaW1wbGVtZW50IHRoaXMhISEhXG4gIEBJbnB1dCgpIGRlbnNpdHk6IERlbnNpdHkgPSAneHMnO1xuICBASW5wdXQoKSByb3dIb3ZlciA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbGxhcHNlZFJvd3MgPSB0cnVlO1xuICBASW5wdXQoKSBjZWxsR2FwOiBDZWxsR2FwID0gMjtcbiAgQElucHV0KCkgcm93R3JvdXBpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgZ3JvdXBEZXNpZ246ICdibScgfCAnJyA9ICcnO1xuXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2UhOiBUYWJsZVZpcnR1YWxTY3JvbGxEYXRhU291cmNlPEl0ZW0+IHwgTWF0VGFibGVEYXRhU291cmNlPEl0ZW0+O1xuICBASW5wdXQoKSBzZXQgaXRlbVJ1bGVzKHJ1bGVzOiBHbG9iYWxSdWxlczxJdGVtPikge1xuICAgIHRoaXMuX3J1bGVNYW5hZ2VyLnNldEdsb2JhbFJ1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIC8vIG9uIGNsaWNrIG91dHNpZGUgb2YgZGF0YWdyaWQsIHRoZSBsYXN0IGVkaXRlZCBpdGVtIHdpbGwgYmUgaW5hY3RpdmF0ZWQuXG4gIC8vIEB0b2RvOiB0aGlzIGJyZWFrcyB0aGUgc2t5Z3JpZCEgRG9udCBrbm93IHdoeS4gQnV0IHdlIGRvbnQgbmVlZCB0aGlzIGJlY2F1c2VcbiAgLy8gc2V0dGluZyB0aGUgbGFzdCBpdGVtIGluYWN0aXZlIHdpbGwgYmUgbWFkZSBiZXkgc2VlIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgY2xpY2soZTogTW91c2VFdmVudFxuICAvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pIGRvY3VtZW50Q2xpY2soZTogTW91c2VFdmVudCkge1xuICAvLyAgIGlmICghdGhpcy5fZWRpdE1hbmFnZXIuaXNJblpvbmVFZGl0SXRlbShlKSkge1xuICAvLyAgICAgdGhpcy5fZWRpdE1hbmFnZXIuc2V0SW5hY3RpdmVMYXN0RWRpdEl0ZW0oKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIGNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLl9lZGl0TWFuYWdlci5zZXRBY3RpdmVFZGl0SXRlbShlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24udGFiJywgWyckZXZlbnQnXSkgdGFiKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLl9lZGl0TWFuYWdlci5zZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gQHRvZG86IHJlbW92ZSB0aGlzIGxhdGVyIHdoZW4ga2V5Ym9hcmQgbmF2aWdhdGlvbiBpcyBpbXBsZW1lbnRlZCFcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzYycsIFsnJGV2ZW50J10pIGVzYyhlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2tleXVwLmVzYycsIGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIGFycm93S2V5KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5ZG93bicsIGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicsIFsnJGV2ZW50J10pIGVudGVyKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5ZG93bi5lbnRlcicsIGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zaGlmdC5lbnRlcicsIFsnJGV2ZW50J10pIHNoaWZ0RW50ZXIoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdrZXlkb3duLnNoaWZ0LmVudGVyJywgZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnRhYicsIFsnJGV2ZW50J10pIHNoaWZ0VGFiKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5ZG93bi5zaGlmdC50YWInLCBlKTtcbiAgfVxuXG4gIHNldFZhbHVlPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtPihcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgdmFsdWU6IEl0ZW1bSXRlbUtleV0sXG4gICAgYWN0aW9uVHlwZTogSXRlbUFjdGlvblR5cGUsXG4gICAgd2hlcmU6ICdkYXRhU291cmNlJyB8ICdmb3JtU291cmNlJyA9ICdkYXRhU291cmNlJyxcbiAgKSB7XG4gICAgY29uc3QgaXRlbSA9IHNldEl0ZW1QYXlsb2FkKHt9LCB7IGFjdGlvblR5cGUgfSkgYXMgSXRlbTtcbiAgICBpZiAod2hlcmUgPT09ICdkYXRhU291cmNlJykge1xuICAgICAgdGhpcy5fZGF0YU1hbmFnZXIuc2V0VmFsdWUoa2V5LCB2YWx1ZSwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWVDaGFuZ2UodmFsdWVDaGFuZ2U6IFZhbHVlQ2hhbmdlIHwgbnVsbCkge1xuICAgIHRoaXMuX2RhdGFNYW5hZ2VyLnNldFZhbHVlQ2hhbmdlKHZhbHVlQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VmdWwgd2hlbiB5b3Ugd2FudCB0byBhZGQgZHluYW1pYyBhIHJ1bnRpbWUgYW4gaXRlbSB0byB0aGUgdGFibGUuXG4gICAqL1xuICBhY3RpdmVNZXRhUm93KGFjdGl2ZTogYm9vbGVhbiwgYWN0aW9uVHlwZTogSXRlbUFjdGlvblR5cGUpIHtcbiAgICB0aGlzLl9kYXRhTWFuYWdlci5hZGREYXRhU2xvdEl0ZW0oe1xuICAgICAgaW5kZXg6IEl0ZW1BY3Rpb25JbmRleC5yb3dHbG9iYWwsXG4gICAgICBpZDogYWN0aW9uVHlwZSxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGFjdGlvblR5cGUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9kYXRhTWFuYWdlci5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZTxJdGVtPjtcbiAgICB0aGlzLiN2YWx1ZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLiN1bnN1YikpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy4jdW5zdWIubmV4dCgpO1xuICAgIHRoaXMuI3Vuc3ViLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZGF0YU1hbmFnZXIuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=