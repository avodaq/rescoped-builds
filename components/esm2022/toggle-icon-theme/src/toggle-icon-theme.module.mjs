import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleIconThemeComponent } from './toggle-icon-theme.component';
import { ToggleIconModule } from '@rescoped/components/toggle-icon';
// MDC
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
class ToggleIconThemeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeModule, declarations: [ToggleIconThemeComponent], imports: [CommonModule, MatSlideToggleModule, ToggleIconModule], exports: [ToggleIconThemeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeModule, imports: [CommonModule, MatSlideToggleModule, ToggleIconModule] }); }
}
export { ToggleIconThemeModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ToggleIconThemeComponent],
                    imports: [CommonModule, MatSlideToggleModule, ToggleIconModule],
                    exports: [ToggleIconThemeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24tdGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uLXRoZW1lL3NyYy90b2dnbGUtaWNvbi10aGVtZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsTUFBTTtBQUNOLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUV0RSxNQUthLHFCQUFxQjs4R0FBckIscUJBQXFCOytHQUFyQixxQkFBcUIsaUJBSmpCLHdCQUF3QixhQUM3QixZQUFZLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLGFBQ3BELHdCQUF3QjsrR0FFdkIscUJBQXFCLFlBSHRCLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0I7O1NBR25ELHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUM7b0JBQy9ELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9nZ2xlSWNvblRoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9nZ2xlSWNvbk1vZHVsZSB9IGZyb20gJ0ByZXNjb3BlZC9jb21wb25lbnRzL3RvZ2dsZS1pY29uJztcblxuLy8gTURDXG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvZ2dsZUljb25UaGVtZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLCBUb2dnbGVJY29uTW9kdWxlXSxcbiAgZXhwb3J0czogW1RvZ2dsZUljb25UaGVtZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUljb25UaGVtZU1vZHVsZSB7fVxuIl19