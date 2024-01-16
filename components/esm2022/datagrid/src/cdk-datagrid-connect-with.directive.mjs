import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CdkDatagridDirective } from './cdk-datagrid.directive';
import * as i0 from "@angular/core";
export class CdkDatagridConnectWithDirective {
    constructor() {
        this.connectWithDatagrid = null;
        this.clickForDatagridItems = new EventEmitter();
    }
    clickDatagridAction() {
        if (this.connectWithDatagrid) {
            this.clickForDatagridItems.emit(this.connectWithDatagrid.items);
            this.connectWithDatagrid.setValueChange(null);
        }
    }
    ngOnInit() {
        if (!this.connectWithDatagrid) {
            throw new Error('[cdk-datagrid-action] must have a [connectWithDatagrid] input');
        }
        const instanceOfDatagrid = this.connectWithDatagrid instanceof CdkDatagridDirective;
        if (this.connectWithDatagrid && !instanceOfDatagrid) {
            throw new Error('[connectWithDatagrid] input must of type CdkDatagridDirective');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridConnectWithDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.9", type: CdkDatagridConnectWithDirective, isStandalone: true, selector: "[connectWithDatagrid]", inputs: { connectWithDatagrid: "connectWithDatagrid" }, outputs: { clickForDatagridItems: "clickForDatagridItems" }, host: { listeners: { "click": "clickDatagridAction()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridConnectWithDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[connectWithDatagrid]',
                    standalone: true,
                }]
        }], propDecorators: { connectWithDatagrid: [{
                type: Input
            }], clickForDatagridItems: [{
                type: Output
            }], clickDatagridAction: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbm5lY3Qtd2l0aC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb25uZWN0LXdpdGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQU9oRSxNQUFNLE9BQU8sK0JBQStCO0lBTDVDO1FBTVcsd0JBQW1CLEdBQXNDLElBQUksQ0FBQztRQUU3RCwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBbUI5RDtJQWpCd0IsbUJBQW1CO1FBQ3hDLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLFlBQVksb0JBQW9CLENBQUM7UUFDcEYsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7U0FDbEY7SUFDSCxDQUFDOzhHQXJCVSwrQkFBK0I7a0dBQS9CLCtCQUErQjs7MkZBQS9CLCtCQUErQjtrQkFMM0MsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFVSxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBRUkscUJBQXFCO3NCQUE5QixNQUFNO2dCQUVnQixtQkFBbUI7c0JBQXpDLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY29ubmVjdFdpdGhEYXRhZ3JpZF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZENvbm5lY3RXaXRoRGlyZWN0aXZlPEl0ZW0+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29ubmVjdFdpdGhEYXRhZ3JpZDogQ2RrRGF0YWdyaWREaXJlY3RpdmU8SXRlbT4gfCBudWxsID0gbnVsbDtcblxuICBAT3V0cHV0KCkgY2xpY2tGb3JEYXRhZ3JpZEl0ZW1zID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtW10+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBjbGlja0RhdGFncmlkQWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQpIHtcbiAgICAgIHRoaXMuY2xpY2tGb3JEYXRhZ3JpZEl0ZW1zLmVtaXQodGhpcy5jb25uZWN0V2l0aERhdGFncmlkLml0ZW1zKTtcbiAgICAgIHRoaXMuY29ubmVjdFdpdGhEYXRhZ3JpZC5zZXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29ubmVjdFdpdGhEYXRhZ3JpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbY2RrLWRhdGFncmlkLWFjdGlvbl0gbXVzdCBoYXZlIGEgW2Nvbm5lY3RXaXRoRGF0YWdyaWRdIGlucHV0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VPZkRhdGFncmlkID0gdGhpcy5jb25uZWN0V2l0aERhdGFncmlkIGluc3RhbmNlb2YgQ2RrRGF0YWdyaWREaXJlY3RpdmU7XG4gICAgaWYgKHRoaXMuY29ubmVjdFdpdGhEYXRhZ3JpZCAmJiAhaW5zdGFuY2VPZkRhdGFncmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tjb25uZWN0V2l0aERhdGFncmlkXSBpbnB1dCBtdXN0IG9mIHR5cGUgQ2RrRGF0YWdyaWREaXJlY3RpdmUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==