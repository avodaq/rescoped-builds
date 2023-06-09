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
}
CdkDatagridConnectWithDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridConnectWithDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CdkDatagridConnectWithDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: CdkDatagridConnectWithDirective, selector: "[connectWithDatagrid]", inputs: { connectWithDatagrid: "connectWithDatagrid" }, outputs: { clickForDatagridItems: "clickForDatagridItems" }, host: { listeners: { "click": "clickDatagridAction()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridConnectWithDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[connectWithDatagrid]',
                }]
        }], propDecorators: { connectWithDatagrid: [{
                type: Input
            }], clickForDatagridItems: [{
                type: Output
            }], clickDatagridAction: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbm5lY3Qtd2l0aC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb25uZWN0LXdpdGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQU1oRSxNQUFNLE9BQU8sK0JBQStCO0lBSjVDO1FBS1csd0JBQW1CLEdBQXNDLElBQUksQ0FBQztRQUU3RCwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBbUI5RDtJQWpCd0IsbUJBQW1CO1FBQ3hDLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLFlBQVksb0JBQW9CLENBQUM7UUFDcEYsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7U0FDbEY7SUFDSCxDQUFDOzs0SEFyQlUsK0JBQStCO2dIQUEvQiwrQkFBK0I7MkZBQS9CLCtCQUErQjtrQkFKM0MsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDOzhCQUVVLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFSSxxQkFBcUI7c0JBQTlCLE1BQU07Z0JBRWdCLG1CQUFtQjtzQkFBekMsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjb25uZWN0V2l0aERhdGFncmlkXScsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkQ29ubmVjdFdpdGhEaXJlY3RpdmU8SXRlbT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25uZWN0V2l0aERhdGFncmlkOiBDZGtEYXRhZ3JpZERpcmVjdGl2ZTxJdGVtPiB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSBjbGlja0ZvckRhdGFncmlkSXRlbXMgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIGNsaWNrRGF0YWdyaWRBY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdFdpdGhEYXRhZ3JpZCkge1xuICAgICAgdGhpcy5jbGlja0ZvckRhdGFncmlkSXRlbXMuZW1pdCh0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQuaXRlbXMpO1xuICAgICAgdGhpcy5jb25uZWN0V2l0aERhdGFncmlkLnNldFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb25uZWN0V2l0aERhdGFncmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tjZGstZGF0YWdyaWQtYWN0aW9uXSBtdXN0IGhhdmUgYSBbY29ubmVjdFdpdGhEYXRhZ3JpZF0gaW5wdXQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU9mRGF0YWdyaWQgPSB0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQgaW5zdGFuY2VvZiBDZGtEYXRhZ3JpZERpcmVjdGl2ZTtcbiAgICBpZiAodGhpcy5jb25uZWN0V2l0aERhdGFncmlkICYmICFpbnN0YW5jZU9mRGF0YWdyaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2Nvbm5lY3RXaXRoRGF0YWdyaWRdIGlucHV0IG11c3Qgb2YgdHlwZSBDZGtEYXRhZ3JpZERpcmVjdGl2ZScpO1xuICAgIH1cbiAgfVxufVxuIl19