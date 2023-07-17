import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CdkDatagridDirective } from './cdk-datagrid.directive';
import * as i0 from "@angular/core";
class CdkDatagridConnectWithDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridConnectWithDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridConnectWithDirective, isStandalone: true, selector: "[connectWithDatagrid]", inputs: { connectWithDatagrid: "connectWithDatagrid" }, outputs: { clickForDatagridItems: "clickForDatagridItems" }, host: { listeners: { "click": "clickDatagridAction()" } }, ngImport: i0 }); }
}
export { CdkDatagridConnectWithDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridConnectWithDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbm5lY3Qtd2l0aC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb25uZWN0LXdpdGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxNQUthLCtCQUErQjtJQUw1QztRQU1XLHdCQUFtQixHQUFzQyxJQUFJLENBQUM7UUFFN0QsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQW1COUQ7SUFqQndCLG1CQUFtQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNsRjtRQUVELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixZQUFZLG9CQUFvQixDQUFDO1FBQ3BGLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQzs4R0FyQlUsK0JBQStCO2tHQUEvQiwrQkFBK0I7O1NBQS9CLCtCQUErQjsyRkFBL0IsK0JBQStCO2tCQUwzQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFSSxxQkFBcUI7c0JBQTlCLE1BQU07Z0JBRWdCLG1CQUFtQjtzQkFBekMsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjb25uZWN0V2l0aERhdGFncmlkXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkQ29ubmVjdFdpdGhEaXJlY3RpdmU8SXRlbT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb25uZWN0V2l0aERhdGFncmlkOiBDZGtEYXRhZ3JpZERpcmVjdGl2ZTxJdGVtPiB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSBjbGlja0ZvckRhdGFncmlkSXRlbXMgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIGNsaWNrRGF0YWdyaWRBY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdFdpdGhEYXRhZ3JpZCkge1xuICAgICAgdGhpcy5jbGlja0ZvckRhdGFncmlkSXRlbXMuZW1pdCh0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQuaXRlbXMpO1xuICAgICAgdGhpcy5jb25uZWN0V2l0aERhdGFncmlkLnNldFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb25uZWN0V2l0aERhdGFncmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tjZGstZGF0YWdyaWQtYWN0aW9uXSBtdXN0IGhhdmUgYSBbY29ubmVjdFdpdGhEYXRhZ3JpZF0gaW5wdXQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU9mRGF0YWdyaWQgPSB0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQgaW5zdGFuY2VvZiBDZGtEYXRhZ3JpZERpcmVjdGl2ZTtcbiAgICBpZiAodGhpcy5jb25uZWN0V2l0aERhdGFncmlkICYmICFpbnN0YW5jZU9mRGF0YWdyaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2Nvbm5lY3RXaXRoRGF0YWdyaWRdIGlucHV0IG11c3Qgb2YgdHlwZSBDZGtEYXRhZ3JpZERpcmVjdGl2ZScpO1xuICAgIH1cbiAgfVxufVxuIl19