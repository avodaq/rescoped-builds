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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridConnectWithDirective, selector: "[connectWithDatagrid]", inputs: { connectWithDatagrid: "connectWithDatagrid" }, outputs: { clickForDatagridItems: "clickForDatagridItems" }, host: { listeners: { "click": "clickDatagridAction()" } }, ngImport: i0 }); }
}
export { CdkDatagridConnectWithDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridConnectWithDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbm5lY3Qtd2l0aC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1jb25uZWN0LXdpdGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxNQUlhLCtCQUErQjtJQUo1QztRQUtXLHdCQUFtQixHQUFzQyxJQUFJLENBQUM7UUFFN0QsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQW1COUQ7SUFqQndCLG1CQUFtQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNsRjtRQUVELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixZQUFZLG9CQUFvQixDQUFDO1FBQ3BGLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQzs4R0FyQlUsK0JBQStCO2tHQUEvQiwrQkFBK0I7O1NBQS9CLCtCQUErQjsyRkFBL0IsK0JBQStCO2tCQUozQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7OEJBRVUsbUJBQW1CO3NCQUEzQixLQUFLO2dCQUVJLHFCQUFxQjtzQkFBOUIsTUFBTTtnQkFFZ0IsbUJBQW1CO3NCQUF6QyxZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RhdGFncmlkRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Nvbm5lY3RXaXRoRGF0YWdyaWRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRDb25uZWN0V2l0aERpcmVjdGl2ZTxJdGVtPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbm5lY3RXaXRoRGF0YWdyaWQ6IENka0RhdGFncmlkRGlyZWN0aXZlPEl0ZW0+IHwgbnVsbCA9IG51bGw7XG5cbiAgQE91dHB1dCgpIGNsaWNrRm9yRGF0YWdyaWRJdGVtcyA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVtdPigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgY2xpY2tEYXRhZ3JpZEFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5jb25uZWN0V2l0aERhdGFncmlkKSB7XG4gICAgICB0aGlzLmNsaWNrRm9yRGF0YWdyaWRJdGVtcy5lbWl0KHRoaXMuY29ubmVjdFdpdGhEYXRhZ3JpZC5pdGVtcyk7XG4gICAgICB0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQuc2V0VmFsdWVDaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2Nkay1kYXRhZ3JpZC1hY3Rpb25dIG11c3QgaGF2ZSBhIFtjb25uZWN0V2l0aERhdGFncmlkXSBpbnB1dCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlT2ZEYXRhZ3JpZCA9IHRoaXMuY29ubmVjdFdpdGhEYXRhZ3JpZCBpbnN0YW5jZW9mIENka0RhdGFncmlkRGlyZWN0aXZlO1xuICAgIGlmICh0aGlzLmNvbm5lY3RXaXRoRGF0YWdyaWQgJiYgIWluc3RhbmNlT2ZEYXRhZ3JpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbY29ubmVjdFdpdGhEYXRhZ3JpZF0gaW5wdXQgbXVzdCBvZiB0eXBlIENka0RhdGFncmlkRGlyZWN0aXZlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=