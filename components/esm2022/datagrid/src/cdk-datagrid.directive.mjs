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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridDirective, isStandalone: true, selector: "cdk-table[cdk-datagrid]", inputs: { density: "density", rowHover: "rowHover", collapsedRows: "collapsedRows", cellGap: "cellGap", rowGrouping: "rowGrouping", groupDesign: "groupDesign", dataSource: "dataSource", itemRules: "itemRules" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "click": "click($event)", "keydown.tab": "tab($event)", "keyup.esc": "esc($event)", "keydown": "arrowKey($event)", "keydown.enter": "enter($event)", "keydown.shift.enter": "shiftEnter($event)", "keydown.shift.tab": "shiftTab($event)" }, properties: { "class.cdk-datagrid": "this.hostClass" } }, exportAs: ["cdkDatagrid"], ngImport: i0 }); }
}
export { CdkDatagridDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'cdk-table[cdk-datagrid]',
                    exportAs: 'cdkDatagrid',
                    standalone: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLGVBQWUsR0FHaEIsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFRL0IsTUFNYSxvQkFBb0I7SUFDL0IsWUFDbUIsSUFBdUIsRUFDdkIsWUFBMEMsRUFDMUMsWUFBMEMsRUFDMUMsWUFBaUQ7UUFIakQsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQThCO1FBQzFDLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUM7UUFHcEUsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFrQlYsZ0JBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUVoRSx1QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFB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QyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBSVEsS0FBSztzQkFBL0MsWUFBWTt1QkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBSVEsVUFBVTtzQkFBMUQsWUFBWTt1QkFBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFJQSxRQUFRO3NCQUF0RCxZQUFZO3VCQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2RrRGF0YWdyaWREYXRhTWFuYWdlcixcbiAgR2xvYmFsUnVsZXMsXG4gIEl0ZW1BY3Rpb25JbmRleCxcbiAgSXRlbUFjdGlvblR5cGUsXG4gIFZhbHVlQ2hhbmdlLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1kYXRhLm1hbmFnZXInO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0TWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlcic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtcnVsZS5tYW5hZ2VyJztcbmltcG9ydCB7IHNldEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuaW1wb3J0IHsgVGFibGVWaXJ0dWFsU2Nyb2xsRGF0YVNvdXJjZSB9IGZyb20gJ25nLXRhYmxlLXZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vLyBNRENcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IHR5cGUgRGVuc2l0eSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZyc7XG5leHBvcnQgdHlwZSBDZWxsR2FwID0gMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdjZGstdGFibGVbY2RrLWRhdGFncmlkXScsXG4gIGV4cG9ydEFzOiAnY2RrRGF0YWdyaWQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZERpcmVjdGl2ZTxJdGVtPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhTWFuYWdlcjogQ2RrRGF0YWdyaWREYXRhTWFuYWdlcjxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lZGl0TWFuYWdlcjogQ2RrRGF0YWdyaWRFZGl0TWFuYWdlcjxIVE1MRWxlbWVudD4sXG4gICkge31cblxuICAjdW5zdWIgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBjb3VudFNpbmdsZUl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhTWFuYWdlci5jb3VudFNpbmdsZUl0ZW1zO1xuICB9XG5cbiAgZ2V0IGNvdW50R3JvdXBJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YU1hbmFnZXIuY291bnRHcm91cEl0ZW1zO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhTWFuYWdlci5kYXRhO1xuICB9XG5cbiAgZ2V0IGluQ2VsbFpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRNYW5hZ2VyLmluQ2VsbFpvbmU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSB0aGlzLl9kYXRhTWFuYWdlci52YWx1ZUNoYW5nZSQ7XG5cbiAgY3VycmVudFZhbHVlQ2hhbmdlOiBWYWx1ZUNoYW5nZSB8IG51bGwgPSBudWxsO1xuICByZWFkb25seSAjdmFsdWVDaGFuZ2UgPSB0aGlzLl9kYXRhTWFuYWdlci52YWx1ZUNoYW5nZSQucGlwZShcbiAgICB0YXAodmFsdWVDaGFuZ2UgPT4gKHRoaXMuY3VycmVudFZhbHVlQ2hhbmdlID0gdmFsdWVDaGFuZ2UpKSxcbiAgICB0YXAoKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKSxcbiAgKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNkay1kYXRhZ3JpZCcpIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgLy8gQHRvZG86IGltcGxlbWVudCB0aGlzISEhIVxuICBASW5wdXQoKSBkZW5zaXR5OiBEZW5zaXR5ID0gJ3hzJztcbiAgQElucHV0KCkgcm93SG92ZXIgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xsYXBzZWRSb3dzID0gdHJ1ZTtcbiAgQElucHV0KCkgY2VsbEdhcDogQ2VsbEdhcCA9IDI7XG4gIEBJbnB1dCgpIHJvd0dyb3VwaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdyb3VwRGVzaWduOiAnYm0nIHwgJycgPSAnJztcblxuICBASW5wdXQoKSBkYXRhU291cmNlITogVGFibGVWaXJ0dWFsU2Nyb2xsRGF0YVNvdXJjZTxJdGVtPiB8IE1hdFRhYmxlRGF0YVNvdXJjZTxJdGVtPjtcbiAgQElucHV0KCkgc2V0IGl0ZW1SdWxlcyhydWxlczogR2xvYmFsUnVsZXM8SXRlbT4pIHtcbiAgICB0aGlzLl9ydWxlTWFuYWdlci5zZXRHbG9iYWxSdWxlcyhydWxlcyk7XG4gIH1cblxuICAvLyBvbiBjbGljayBvdXRzaWRlIG9mIGRhdGFncmlkLCB0aGUgbGFzdCBlZGl0ZWQgaXRlbSB3aWxsIGJlIGluYWN0aXZhdGVkLlxuICAvLyBAdG9kbzogdGhpcyBicmVha3MgdGhlIHNreWdyaWQhIERvbnQga25vdyB3aHkuIEJ1dCB3ZSBkb250IG5lZWQgdGhpcyBiZWNhdXNlXG4gIC8vIHNldHRpbmcgdGhlIGxhc3QgaXRlbSBpbmFjdGl2ZSB3aWxsIGJlIG1hZGUgYmV5IHNlZSBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIGNsaWNrKGU6IE1vdXNlRXZlbnRcbiAgLy8gQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBkb2N1bWVudENsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgLy8gICBpZiAoIXRoaXMuX2VkaXRNYW5hZ2VyLmlzSW5ab25lRWRpdEl0ZW0oZSkpIHtcbiAgLy8gICAgIHRoaXMuX2VkaXRNYW5hZ2VyLnNldEluYWN0aXZlTGFzdEVkaXRJdGVtKCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBjbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5fZWRpdE1hbmFnZXIuc2V0QWN0aXZlRWRpdEl0ZW0oZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnRhYicsIFsnJGV2ZW50J10pIHRhYihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5fZWRpdE1hbmFnZXIuc2V0SW5hY3RpdmVMYXN0RWRpdEl0ZW0oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEB0b2RvOiByZW1vdmUgdGhpcyBsYXRlciB3aGVuIGtleWJvYXJkIG5hdmlnYXRpb24gaXMgaW1wbGVtZW50ZWQhXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cC5lc2MnLCBbJyRldmVudCddKSBlc2MoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdrZXl1cC5lc2MnLCBlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBhcnJvd0tleShlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2tleWRvd24nLCBlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKSBlbnRlcihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2tleWRvd24uZW50ZXInLCBlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc2hpZnQuZW50ZXInLCBbJyRldmVudCddKSBzaGlmdEVudGVyKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5ZG93bi5zaGlmdC5lbnRlcicsIGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zaGlmdC50YWInLCBbJyRldmVudCddKSBzaGlmdFRhYihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2tleWRvd24uc2hpZnQudGFiJywgZSk7XG4gIH1cblxuICBzZXRWYWx1ZTxJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbT4oXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIHZhbHVlOiBJdGVtW0l0ZW1LZXldLFxuICAgIGFjdGlvblR5cGU6IEl0ZW1BY3Rpb25UeXBlLFxuICAgIHdoZXJlOiAnZGF0YVNvdXJjZScgfCAnZm9ybVNvdXJjZScgPSAnZGF0YVNvdXJjZScsXG4gICkge1xuICAgIGNvbnN0IGl0ZW0gPSBzZXRJdGVtUGF5bG9hZCh7fSwgeyBhY3Rpb25UeXBlIH0pIGFzIEl0ZW07XG4gICAgaWYgKHdoZXJlID09PSAnZGF0YVNvdXJjZScpIHtcbiAgICAgIHRoaXMuX2RhdGFNYW5hZ2VyLnNldFZhbHVlKGtleSwgdmFsdWUsIGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlQ2hhbmdlKHZhbHVlQ2hhbmdlOiBWYWx1ZUNoYW5nZSB8IG51bGwpIHtcbiAgICB0aGlzLl9kYXRhTWFuYWdlci5zZXRWYWx1ZUNoYW5nZSh2YWx1ZUNoYW5nZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gYWRkIGR5bmFtaWMgYSBydW50aW1lIGFuIGl0ZW0gdG8gdGhlIHRhYmxlLlxuICAgKi9cbiAgYWN0aXZlTWV0YVJvdyhhY3RpdmU6IGJvb2xlYW4sIGFjdGlvblR5cGU6IEl0ZW1BY3Rpb25UeXBlKSB7XG4gICAgdGhpcy5fZGF0YU1hbmFnZXIuYWRkRGF0YVNsb3RJdGVtKHtcbiAgICAgIGluZGV4OiBJdGVtQWN0aW9uSW5kZXgucm93R2xvYmFsLFxuICAgICAgaWQ6IGFjdGlvblR5cGUsXG4gICAgICBhY3RpdmUsXG4gICAgICBhY3Rpb25UeXBlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZGF0YU1hbmFnZXIuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2U8SXRlbT47XG4gICAgdGhpcy4jdmFsdWVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy4jdW5zdWIpKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuI3Vuc3ViLm5leHQoKTtcbiAgICB0aGlzLiN1bnN1Yi5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2RhdGFNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19