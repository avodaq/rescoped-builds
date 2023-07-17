import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { ThemeStore } from '@rescoped/services/theme-store';
import { AsyncPipe } from '@angular/common';
import { ToggleIconComponent } from '@rescoped/components/toggle-icon';
import * as i0 from "@angular/core";
import * as i1 from "@rescoped/services/theme-store";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: ToggleIconThemeComponent, isStandalone: true, selector: "avo-toggle-icon-theme", inputs: { color: "color" }, host: { properties: { "class": "this._hostClass" } }, ngImport: i0, template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"], dependencies: [{ kind: "component", type: ToggleIconComponent, selector: "avo-toggle-icon", inputs: ["color", "checkedIcon", "unCheckedIcon", "checked"], outputs: ["changed"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { ToggleIconThemeComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon-theme', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ToggleIconComponent, AsyncPipe], template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ThemeStore }]; }, propDecorators: { _hostClass: [{
                type: HostBinding,
                args: ['class']
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24tdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uLXRoZW1lL3NyYy90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24tdGhlbWUvc3JjL3RvZ2dsZS1pY29uLXRoZW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQUV2RSxNQVNhLHdCQUF3QjtJQUluQyxZQUE2QixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUhwRCxrQ0FBa0M7UUFDekIsYUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBSzVCLGVBQVUsR0FBRyx1QkFBdUIsQ0FBQztRQUV0RCwyRUFBMkU7UUFDbEUsVUFBSyxHQUFpQixTQUFTLENBQUM7SUFOYyxDQUFDO0lBUXhEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxPQUFnQjtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzhHQWxCVSx3QkFBd0I7a0dBQXhCLHdCQUF3QixtS0NyQnJDLHFJQUtBLGlHRGNZLG1CQUFtQiwySUFBRSxTQUFTOztTQUU3Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFUcEMsU0FBUzsrQkFDRSx1QkFBdUIsaUJBR2xCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDO2lHQVN4QixVQUFVO3NCQUQxQixXQUFXO3VCQUFDLE9BQU87Z0JBSVgsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IFRoZW1lU3RvcmUgfSBmcm9tICdAcmVzY29wZWQvc2VydmljZXMvdGhlbWUtc3RvcmUnO1xuaW1wb3J0IHsgQXN5bmNQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRvZ2dsZUljb25Db21wb25lbnQgfSBmcm9tICdAcmVzY29wZWQvY29tcG9uZW50cy90b2dnbGUtaWNvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F2by10b2dnbGUtaWNvbi10aGVtZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS1pY29uLXRoZW1lLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVG9nZ2xlSWNvbkNvbXBvbmVudCwgQXN5bmNQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlSWNvblRoZW1lQ29tcG9uZW50IHtcbiAgLyoqIFRoZSBhY3RpdmUgdGhlbWVTdG9yZSBzdGF0ZSAqL1xuICByZWFkb25seSBfYWN0aXZlJCA9IHRoaXMuX3RoZW1lU3RvcmUuYWN0aXZlJDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90aGVtZVN0b3JlOiBUaGVtZVN0b3JlKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwcml2YXRlIHJlYWRvbmx5IF9ob3N0Q2xhc3MgPSAnYXZvLXRvZ2dsZS1pY29uLXRoZW1lJztcblxuICAvKiogTWF0ZXJpYWwgVGhlbWVQYWxldHRlIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgKi9cbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICAvKipcbiAgICogV2lsbCBjYWxsZWQgd2hlbiBldmVyIHRoZSB0b2dnbGUgc3RhdGUgaXMgY2hhbmdlZFxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBfY2hhbmdlZChjaGFuZ2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdGhlbWVTdG9yZS5zZXRBY3RpdmUoY2hhbmdlZCk7XG4gIH1cbn1cbiIsIjxhdm8tdG9nZ2xlLWljb25cbiAgW2NvbG9yXT1cImNvbG9yXCJcbiAgW2NoZWNrZWRdPVwiKF9hY3RpdmUkIHwgYXN5bmMpIVwiXG4gIChjaGFuZ2VkKT1cIl9jaGFuZ2VkKCRldmVudClcIlxuPjwvYXZvLXRvZ2dsZS1pY29uPlxuIl19