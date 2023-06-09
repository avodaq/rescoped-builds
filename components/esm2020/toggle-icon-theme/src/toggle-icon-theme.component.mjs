import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { ThemeStore } from '@rescoped/services/theme-store';
import * as i0 from "@angular/core";
import * as i1 from "@rescoped/services/theme-store";
import * as i2 from "@rescoped/components/toggle-icon";
import * as i3 from "@angular/common";
export class ToggleIconThemeComponent {
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
}
ToggleIconThemeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ToggleIconThemeComponent, deps: [{ token: i1.ThemeStore }], target: i0.ɵɵFactoryTarget.Component });
ToggleIconThemeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.1", type: ToggleIconThemeComponent, selector: "avo-toggle-icon-theme", inputs: { color: "color" }, host: { properties: { "class": "this._hostClass" } }, ngImport: i0, template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"], dependencies: [{ kind: "component", type: i2.ToggleIconComponent, selector: "avo-toggle-icon", inputs: ["color", "checkedIcon", "unCheckedIcon", "checked"], outputs: ["changed"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ToggleIconThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon-theme', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ThemeStore }]; }, propDecorators: { _hostClass: [{
                type: HostBinding,
                args: ['class']
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24tdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uLXRoZW1lL3NyYy90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24tdGhlbWUvc3JjL3RvZ2dsZS1pY29uLXRoZW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFTNUQsTUFBTSxPQUFPLHdCQUF3QjtJQUluQyxZQUE2QixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUhwRCxrQ0FBa0M7UUFDekIsYUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBSzVCLGVBQVUsR0FBRyx1QkFBdUIsQ0FBQztRQUV0RCwyRUFBMkU7UUFDbEUsVUFBSyxHQUFpQixTQUFTLENBQUM7SUFOYyxDQUFDO0lBUXhEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxPQUFnQjtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOztxSEFsQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0IsK0lDakJyQyxxSUFLQTsyRkRZYSx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsdUJBQXVCLGlCQUdsQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO2lHQVM5QixVQUFVO3NCQUQxQixXQUFXO3VCQUFDLE9BQU87Z0JBSVgsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IFRoZW1lU3RvcmUgfSBmcm9tICdAcmVzY29wZWQvc2VydmljZXMvdGhlbWUtc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdm8tdG9nZ2xlLWljb24tdGhlbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLWljb24tdGhlbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlSWNvblRoZW1lQ29tcG9uZW50IHtcbiAgLyoqIFRoZSBhY3RpdmUgdGhlbWVTdG9yZSBzdGF0ZSAqL1xuICByZWFkb25seSBfYWN0aXZlJCA9IHRoaXMuX3RoZW1lU3RvcmUuYWN0aXZlJDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90aGVtZVN0b3JlOiBUaGVtZVN0b3JlKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwcml2YXRlIHJlYWRvbmx5IF9ob3N0Q2xhc3MgPSAnYXZvLXRvZ2dsZS1pY29uLXRoZW1lJztcblxuICAvKiogTWF0ZXJpYWwgVGhlbWVQYWxldHRlIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgKi9cbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICAvKipcbiAgICogV2lsbCBjYWxsZWQgd2hlbiBldmVyIHRoZSB0b2dnbGUgc3RhdGUgaXMgY2hhbmdlZFxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBfY2hhbmdlZChjaGFuZ2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdGhlbWVTdG9yZS5zZXRBY3RpdmUoY2hhbmdlZCk7XG4gIH1cbn1cbiIsIjxhdm8tdG9nZ2xlLWljb25cbiAgW2NvbG9yXT1cImNvbG9yXCJcbiAgW2NoZWNrZWRdPVwiKF9hY3RpdmUkIHwgYXN5bmMpIVwiXG4gIChjaGFuZ2VkKT1cIl9jaGFuZ2VkKCRldmVudClcIlxuPjwvYXZvLXRvZ2dsZS1pY29uPlxuIl19