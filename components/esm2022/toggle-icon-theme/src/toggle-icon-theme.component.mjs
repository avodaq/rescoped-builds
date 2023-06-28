import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { ThemeStore } from '@rescoped/services/theme-store';
import * as i0 from "@angular/core";
import * as i1 from "@rescoped/services/theme-store";
import * as i2 from "@rescoped/components/toggle-icon";
import * as i3 from "@angular/common";
class ToggleIconThemeComponent {
    constructor(_themeStore) {
        this._themeStore = _themeStore;
        /** The active themeStore state */
        this._active$ = this._themeStore.active$;
        this._hostClass = 'avo-toggle-icon-theme';
        /** Material ThemePalette to be used for the underlying mat-slide-toggle */
        this.color = 'primary';
    }
    /**
     * Will called when ever the toggle state is changed
     * @docs-private
     */
    _changed(changed) {
        this._themeStore.setActive(changed);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeComponent, deps: [{ token: i1.ThemeStore }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: ToggleIconThemeComponent, selector: "avo-toggle-icon-theme", inputs: { color: "color" }, host: { properties: { "class": "this._hostClass" } }, ngImport: i0, template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"], dependencies: [{ kind: "component", type: i2.ToggleIconComponent, selector: "avo-toggle-icon", inputs: ["color", "checkedIcon", "unCheckedIcon", "checked"], outputs: ["changed"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { ToggleIconThemeComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon-theme', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ThemeStore }]; }, propDecorators: { _hostClass: [{
                type: HostBinding,
                args: ['class']
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24tdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uLXRoZW1lL3NyYy90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24tdGhlbWUvc3JjL3RvZ2dsZS1pY29uLXRoZW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFFNUQsTUFPYSx3QkFBd0I7SUFJbkMsWUFBNkIsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFIcEQsa0NBQWtDO1FBQ3pCLGFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUs1QixlQUFVLEdBQUcsdUJBQXVCLENBQUM7UUFFdEQsMkVBQTJFO1FBQ2xFLFVBQUssR0FBaUIsU0FBUyxDQUFDO0lBTmMsQ0FBQztJQVF4RDs7O09BR0c7SUFDSCxRQUFRLENBQUMsT0FBZ0I7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs4R0FsQlUsd0JBQXdCO2tHQUF4Qix3QkFBd0IsK0lDakJyQyxxSUFLQTs7U0RZYSx3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSx1QkFBdUIsaUJBR2xCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07aUdBUzlCLFVBQVU7c0JBRDFCLFdBQVc7dUJBQUMsT0FBTztnQkFJWCxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVTdG9yZSB9IGZyb20gJ0ByZXNjb3BlZC9zZXJ2aWNlcy90aGVtZS1zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F2by10b2dnbGUtaWNvbi10aGVtZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS1pY29uLXRoZW1lLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVJY29uVGhlbWVDb21wb25lbnQge1xuICAvKiogVGhlIGFjdGl2ZSB0aGVtZVN0b3JlIHN0YXRlICovXG4gIHJlYWRvbmx5IF9hY3RpdmUkID0gdGhpcy5fdGhlbWVTdG9yZS5hY3RpdmUkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RoZW1lU3RvcmU6IFRoZW1lU3RvcmUpIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHByaXZhdGUgcmVhZG9ubHkgX2hvc3RDbGFzcyA9ICdhdm8tdG9nZ2xlLWljb24tdGhlbWUnO1xuXG4gIC8qKiBNYXRlcmlhbCBUaGVtZVBhbGV0dGUgdG8gYmUgdXNlZCBmb3IgdGhlIHVuZGVybHlpbmcgbWF0LXNsaWRlLXRvZ2dsZSAqL1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIC8qKlxuICAgKiBXaWxsIGNhbGxlZCB3aGVuIGV2ZXIgdGhlIHRvZ2dsZSBzdGF0ZSBpcyBjaGFuZ2VkXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIF9jaGFuZ2VkKGNoYW5nZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90aGVtZVN0b3JlLnNldEFjdGl2ZShjaGFuZ2VkKTtcbiAgfVxufVxuIiwiPGF2by10b2dnbGUtaWNvblxuICBbY29sb3JdPVwiY29sb3JcIlxuICBbY2hlY2tlZF09XCIoX2FjdGl2ZSQgfCBhc3luYykhXCJcbiAgKGNoYW5nZWQpPVwiX2NoYW5nZWQoJGV2ZW50KVwiXG4+PC9hdm8tdG9nZ2xlLWljb24+XG4iXX0=