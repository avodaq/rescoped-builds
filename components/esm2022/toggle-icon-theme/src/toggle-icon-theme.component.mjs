import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { ThemeStore } from '@rescoped/services/theme-store';
import { AsyncPipe } from '@angular/common';
import { ToggleIconComponent } from '@rescoped/components/toggle-icon';
import * as i0 from "@angular/core";
import * as i1 from "@rescoped/services/theme-store";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ToggleIconThemeComponent, deps: [{ token: i1.ThemeStore }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.9", type: ToggleIconThemeComponent, isStandalone: true, selector: "avo-toggle-icon-theme", inputs: { color: "color" }, host: { properties: { "class": "this._hostClass" } }, ngImport: i0, template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"], dependencies: [{ kind: "component", type: ToggleIconComponent, selector: "avo-toggle-icon", inputs: ["color", "checkedIcon", "unCheckedIcon", "checked"], outputs: ["changed"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ToggleIconThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon-theme', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ToggleIconComponent, AsyncPipe], template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"] }]
        }], ctorParameters: () => [{ type: i1.ThemeStore }], propDecorators: { _hostClass: [{
                type: HostBinding,
                args: ['class']
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24tdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uLXRoZW1lL3NyYy90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24tdGhlbWUvc3JjL3RvZ2dsZS1pY29uLXRoZW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQVd2RSxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQTZCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBSHBELGtDQUFrQztRQUN6QixhQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFLNUIsZUFBVSxHQUFHLHVCQUF1QixDQUFDO1FBRXRELDJFQUEyRTtRQUNsRSxVQUFLLEdBQWlCLFNBQVMsQ0FBQztJQU5jLENBQUM7SUFReEQ7OztPQUdHO0lBQ0gsUUFBUSxDQUFDLE9BQWdCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OEdBbEJVLHdCQUF3QjtrR0FBeEIsd0JBQXdCLG1LQ3JCckMscUlBS0EsaUdEY1ksbUJBQW1CLDJJQUFFLFNBQVM7OzJGQUU3Qix3QkFBd0I7a0JBVHBDLFNBQVM7K0JBQ0UsdUJBQXVCLGlCQUdsQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQzsrRUFTeEIsVUFBVTtzQkFEMUIsV0FBVzt1QkFBQyxPQUFPO2dCQUlYLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVN0b3JlIH0gZnJvbSAnQHJlc2NvcGVkL3NlcnZpY2VzL3RoZW1lLXN0b3JlJztcbmltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUb2dnbGVJY29uQ29tcG9uZW50IH0gZnJvbSAnQHJlc2NvcGVkL2NvbXBvbmVudHMvdG9nZ2xlLWljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdm8tdG9nZ2xlLWljb24tdGhlbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLWljb24tdGhlbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUtaWNvbi10aGVtZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1RvZ2dsZUljb25Db21wb25lbnQsIEFzeW5jUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUljb25UaGVtZUNvbXBvbmVudCB7XG4gIC8qKiBUaGUgYWN0aXZlIHRoZW1lU3RvcmUgc3RhdGUgKi9cbiAgcmVhZG9ubHkgX2FjdGl2ZSQgPSB0aGlzLl90aGVtZVN0b3JlLmFjdGl2ZSQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdGhlbWVTdG9yZTogVGhlbWVTdG9yZSkge31cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHJpdmF0ZSByZWFkb25seSBfaG9zdENsYXNzID0gJ2F2by10b2dnbGUtaWNvbi10aGVtZSc7XG5cbiAgLyoqIE1hdGVyaWFsIFRoZW1lUGFsZXR0ZSB0byBiZSB1c2VkIGZvciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlICovXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIFdpbGwgY2FsbGVkIHdoZW4gZXZlciB0aGUgdG9nZ2xlIHN0YXRlIGlzIGNoYW5nZWRcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX2NoYW5nZWQoY2hhbmdlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3RoZW1lU3RvcmUuc2V0QWN0aXZlKGNoYW5nZWQpO1xuICB9XG59XG4iLCI8YXZvLXRvZ2dsZS1pY29uXG4gIFtjb2xvcl09XCJjb2xvclwiXG4gIFtjaGVja2VkXT1cIihfYWN0aXZlJCB8IGFzeW5jKSFcIlxuICAoY2hhbmdlZCk9XCJfY2hhbmdlZCgkZXZlbnQpXCJcbj48L2F2by10b2dnbGUtaWNvbj5cbiJdfQ==