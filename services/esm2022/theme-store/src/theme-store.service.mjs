import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DOCUMENT } from '@angular/common';
import { exhaustMap, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subject } from 'rxjs';
import { defaultThemeState, LS_THEME_KEY } from './theme-store.models';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-pwa/local-storage";
export class ThemeStore extends ComponentStore {
    constructor(_storage, _doc) {
        // support APP_INITIALIZER work with observable
        // https://github.com/angular/angular/pull/33222
        super(defaultThemeState);
        this._storage = _storage;
        this._doc = _doc;
        this._classList = this._doc.body.classList;
        this._unsub$ = new Subject();
        /** Active selected stream state */
        this.active$ = this.select(({ active }) => active);
        /** Storage stream which holds the ThemeState */
        this._storage$ = this._storage
            .get(LS_THEME_KEY)
            .pipe(map(value => value ?? defaultThemeState));
        /** Should be used for setting the theme state for true or false */
        this.setActive = this.effect(themeActive$ => themeActive$.pipe(exhaustMap(active => this._setStorage({ active, theme: 'dark' })), tap(state => this._set(state))));
        this._init();
    }
    _init() {
        this._storage$.pipe(takeUntil(this._unsub$)).subscribe(state => this._set(state));
    }
    /** Sets theme and patches state */
    _set(state) {
        this._setTheme(state);
        this.patchState(state);
    }
    /** Adds or removes the theme css class to body node */
    _setTheme(state) {
        state.active ? this._classList.add('dark') : this._classList.remove('dark');
    }
    /** Writes ThemeState into storage */
    _setStorage(state) {
        return this._storage.set(LS_THEME_KEY, state).pipe(mapTo(state));
    }
    /** Clears the storage and removes the .dark class */
    clear() {
        const storage$ = this._storage.clear().pipe(tap(() => this._classList.remove('dark')));
        this._unsub$.next();
        this._unsub$.complete();
        return storage$.toPromise();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ThemeStore, deps: [{ token: i1.StorageMap }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ThemeStore, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ThemeStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.StorageMap }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2VydmljZXMvdGhlbWUtc3RvcmUvc3JjL3RoZW1lLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBS25GLE1BQU0sT0FBTyxVQUFXLFNBQVEsY0FBMEI7SUFZeEQsWUFDbUIsUUFBb0IsRUFDRixJQUFjO1FBRWpELCtDQUErQztRQUMvQyxnREFBZ0Q7UUFDaEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFMUixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ0YsU0FBSSxHQUFKLElBQUksQ0FBVTtRQWJsQyxlQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3RDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRS9DLG1DQUFtQztRQUMxQixZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZELGdEQUFnRDtRQUN2QyxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDL0IsR0FBRyxDQUFDLFlBQVksQ0FBQzthQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLGlCQUFpQixDQUFDLENBQXNDLENBQUM7UUFZdkYsbUVBQW1FO1FBQzFELGNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUF1QixZQUFZLENBQUMsRUFBRSxDQUNwRSxZQUFZLENBQUMsSUFBSSxDQUNmLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFDakUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvQixDQUNGLENBQUM7UUFUQSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBVU8sS0FBSztRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELG1DQUFtQztJQUMzQixJQUFJLENBQUMsS0FBaUI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1REFBdUQ7SUFDL0MsU0FBUyxDQUFDLEtBQWlCO1FBQ2pDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQscUNBQXFDO0lBQzdCLFdBQVcsQ0FBQyxLQUFpQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHFEQUFxRDtJQUNyRCxLQUFLO1FBQ0gsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFeEIsT0FBTyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs4R0F6RFUsVUFBVSw0Q0FjWCxRQUFRO2tIQWRQLFVBQVUsY0FGVCxNQUFNOzsyRkFFUCxVQUFVO2tCQUh0QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBZUksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRTdG9yZSB9IGZyb20gJ0BuZ3J4L2NvbXBvbmVudC1zdG9yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBleGhhdXN0TWFwLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0b3JhZ2VNYXAgfSBmcm9tICdAbmd4LXB3YS9sb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZmF1bHRUaGVtZVN0YXRlLCBMU19USEVNRV9LRVksIFRoZW1lU3RhdGUgfSBmcm9tICcuL3RoZW1lLXN0b3JlLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZVN0b3JlIGV4dGVuZHMgQ29tcG9uZW50U3RvcmU8VGhlbWVTdGF0ZT4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jbGFzc0xpc3QgPSB0aGlzLl9kb2MuYm9keS5jbGFzc0xpc3Q7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Vuc3ViJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEFjdGl2ZSBzZWxlY3RlZCBzdHJlYW0gc3RhdGUgKi9cbiAgcmVhZG9ubHkgYWN0aXZlJCA9IHRoaXMuc2VsZWN0KCh7IGFjdGl2ZSB9KSA9PiBhY3RpdmUpO1xuXG4gIC8qKiBTdG9yYWdlIHN0cmVhbSB3aGljaCBob2xkcyB0aGUgVGhlbWVTdGF0ZSAqL1xuICByZWFkb25seSBfc3RvcmFnZSQgPSB0aGlzLl9zdG9yYWdlXG4gICAgLmdldChMU19USEVNRV9LRVkpXG4gICAgLnBpcGUobWFwKHZhbHVlID0+IHZhbHVlID8/IGRlZmF1bHRUaGVtZVN0YXRlKSkgYXMgdW5rbm93biBhcyBPYnNlcnZhYmxlPFRoZW1lU3RhdGU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3N0b3JhZ2U6IFN0b3JhZ2VNYXAsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBfZG9jOiBEb2N1bWVudCxcbiAgKSB7XG4gICAgLy8gc3VwcG9ydCBBUFBfSU5JVElBTElaRVIgd29yayB3aXRoIG9ic2VydmFibGVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMzMyMjJcbiAgICBzdXBlcihkZWZhdWx0VGhlbWVTdGF0ZSk7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgLyoqIFNob3VsZCBiZSB1c2VkIGZvciBzZXR0aW5nIHRoZSB0aGVtZSBzdGF0ZSBmb3IgdHJ1ZSBvciBmYWxzZSAqL1xuICByZWFkb25seSBzZXRBY3RpdmUgPSB0aGlzLmVmZmVjdDxUaGVtZVN0YXRlWydhY3RpdmUnXT4odGhlbWVBY3RpdmUkID0+XG4gICAgdGhlbWVBY3RpdmUkLnBpcGUoXG4gICAgICBleGhhdXN0TWFwKGFjdGl2ZSA9PiB0aGlzLl9zZXRTdG9yYWdlKHsgYWN0aXZlLCB0aGVtZTogJ2RhcmsnIH0pKSxcbiAgICAgIHRhcChzdGF0ZSA9PiB0aGlzLl9zZXQoc3RhdGUpKSxcbiAgICApLFxuICApO1xuXG4gIHByaXZhdGUgX2luaXQoKSB7XG4gICAgdGhpcy5fc3RvcmFnZSQucGlwZSh0YWtlVW50aWwodGhpcy5fdW5zdWIkKSkuc3Vic2NyaWJlKHN0YXRlID0+IHRoaXMuX3NldChzdGF0ZSkpO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlbWUgYW5kIHBhdGNoZXMgc3RhdGUgKi9cbiAgcHJpdmF0ZSBfc2V0KHN0YXRlOiBUaGVtZVN0YXRlKSB7XG4gICAgdGhpcy5fc2V0VGhlbWUoc3RhdGUpO1xuICAgIHRoaXMucGF0Y2hTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICAvKiogQWRkcyBvciByZW1vdmVzIHRoZSB0aGVtZSBjc3MgY2xhc3MgdG8gYm9keSBub2RlICovXG4gIHByaXZhdGUgX3NldFRoZW1lKHN0YXRlOiBUaGVtZVN0YXRlKSB7XG4gICAgc3RhdGUuYWN0aXZlID8gdGhpcy5fY2xhc3NMaXN0LmFkZCgnZGFyaycpIDogdGhpcy5fY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICB9XG5cbiAgLyoqIFdyaXRlcyBUaGVtZVN0YXRlIGludG8gc3RvcmFnZSAqL1xuICBwcml2YXRlIF9zZXRTdG9yYWdlKHN0YXRlOiBUaGVtZVN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2Uuc2V0KExTX1RIRU1FX0tFWSwgc3RhdGUpLnBpcGUobWFwVG8oc3RhdGUpKTtcbiAgfVxuXG4gIC8qKiBDbGVhcnMgdGhlIHN0b3JhZ2UgYW5kIHJlbW92ZXMgdGhlIC5kYXJrIGNsYXNzICovXG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UkID0gdGhpcy5fc3RvcmFnZS5jbGVhcigpLnBpcGUodGFwKCgpID0+IHRoaXMuX2NsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKSkpO1xuICAgIHRoaXMuX3Vuc3ViJC5uZXh0KCk7XG4gICAgdGhpcy5fdW5zdWIkLmNvbXBsZXRlKCk7XG5cbiAgICByZXR1cm4gc3RvcmFnZSQudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==