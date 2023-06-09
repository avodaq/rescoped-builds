import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { CdkDatagridCollapseComponent } from './cdk-datagrid-collapse';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
export class MatDatagridCollapseComponent extends CdkDatagridCollapseComponent {
    constructor() {
        super(...arguments);
        this.hostClass = true;
        this.collapsibleClass = true;
    }
    get collapsedClass() {
        return this.collapsed;
    }
}
MatDatagridCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridCollapseComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
MatDatagridCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.1", type: MatDatagridCollapseComponent, selector: "mat-datagrid-collapse", host: { properties: { "class.mat-datagrid-collapse": "this.hostClass", "class.mat-datagrid-collapsible": "this.collapsibleClass", "class.mat-datagrid-collapsed": "this.collapsedClass" } }, usesInheritance: true, ngImport: i0, template: `
    <div class="cdk-datagrid-collapse">
      <ng-container *ngIf="getActionType === 'row-global'">
        <div class="row-global flex">
          <mat-icon class="m-auto">edit_note</mat-icon>
        </div>
      </ng-container>

      <ng-container *ngIf="getActionType === 'row-group'">
        <button (click)="collapseChanged()" mat-icon-button aria-label="Collapse this group">
          <mat-icon>
            {{ collapsed ? 'expand_more' : 'expand_less' }}
          </mat-icon>
        </button>
      </ng-container>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-collapse',
                    template: `
    <div class="cdk-datagrid-collapse">
      <ng-container *ngIf="getActionType === 'row-global'">
        <div class="row-global flex">
          <mat-icon class="m-auto">edit_note</mat-icon>
        </div>
      </ng-container>

      <ng-container *ngIf="getActionType === 'row-group'">
        <button (click)="collapseChanged()" mat-icon-button aria-label="Collapse this group">
          <mat-icon>
            {{ collapsed ? 'expand_more' : 'expand_less' }}
          </mat-icon>
        </button>
      </ng-container>
    </div>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-collapse']
            }], collapsibleClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-collapsible']
            }], collapsedClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-collapsed']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBeUJ2RSxNQUFNLE9BQU8sNEJBQW1DLFNBQVEsNEJBQWtDO0lBdkIxRjs7UUF3QnVELGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7S0FLakY7SUFIQyxJQUEwRCxjQUFjO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzt5SEFOVSw0QkFBNEI7NkdBQTVCLDRCQUE0QixpUkFwQjdCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUOzJGQUlVLDRCQUE0QjtrQkF2QnhDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs4QkFFc0QsU0FBUztzQkFBN0QsV0FBVzt1QkFBQyw2QkFBNkI7Z0JBQ2MsZ0JBQWdCO3NCQUF2RSxXQUFXO3VCQUFDLGdDQUFnQztnQkFFYSxjQUFjO3NCQUF2RSxXQUFXO3VCQUFDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbGxhcHNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWNvbGxhcHNlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2RrLWRhdGFncmlkLWNvbGxhcHNlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0QWN0aW9uVHlwZSA9PT0gJ3Jvdy1nbG9iYWwnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctZ2xvYmFsIGZsZXhcIj5cbiAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtLWF1dG9cIj5lZGl0X25vdGU8L21hdC1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0QWN0aW9uVHlwZSA9PT0gJ3Jvdy1ncm91cCdcIj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29sbGFwc2VDaGFuZ2VkKClcIiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNvbGxhcHNlIHRoaXMgZ3JvdXBcIj5cbiAgICAgICAgICA8bWF0LWljb24+XG4gICAgICAgICAgICB7eyBjb2xsYXBzZWQgPyAnZXhwYW5kX21vcmUnIDogJ2V4cGFuZF9sZXNzJyB9fVxuICAgICAgICAgIDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50PEl0ZW0+IGV4dGVuZHMgQ2RrRGF0YWdyaWRDb2xsYXBzZUNvbXBvbmVudDxJdGVtPiB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWNvbGxhcHNlJykgb3ZlcnJpZGUgaG9zdENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtY29sbGFwc2libGUnKSBvdmVycmlkZSBjb2xsYXBzaWJsZUNsYXNzID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1jb2xsYXBzZWQnKSBvdmVycmlkZSBnZXQgY29sbGFwc2VkQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkO1xuICB9XG59XG4iXX0=