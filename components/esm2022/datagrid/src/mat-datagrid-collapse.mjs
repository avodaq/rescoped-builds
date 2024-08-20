import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { CdkDatagridCollapseComponent } from './cdk-datagrid-collapse';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/button";
export class MatDatagridCollapseComponent extends CdkDatagridCollapseComponent {
    constructor() {
        super(...arguments);
        this.hostClass = true;
        this.collapsibleClass = true;
    }
    get collapsedClass() {
        return this.collapsed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridCollapseComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.7", type: MatDatagridCollapseComponent, isStandalone: true, selector: "mat-datagrid-collapse", host: { properties: { "class.mat-datagrid-collapse": "this.hostClass", "class.mat-datagrid-collapsible": "this.collapsibleClass", "class.mat-datagrid-collapsed": "this.collapsedClass" } }, usesInheritance: true, ngImport: i0, template: `
    <div class="cdk-datagrid-collapse">
      @if (getActionType === 'row-global') {
        <div class="row-global flex">
          <mat-icon class="m-auto">edit_note</mat-icon>
        </div>
      }
      @if (getActionType === 'row-group') {
        <button (click)="collapseChanged()" mat-icon-button aria-label="Collapse this group">
          <mat-icon>
            {{ collapsed ? 'expand_more' : 'expand_less' }}
          </mat-icon>
        </button>
      }
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-collapse',
                    template: `
    <div class="cdk-datagrid-collapse">
      @if (getActionType === 'row-global') {
        <div class="row-global flex">
          <mat-icon class="m-auto">edit_note</mat-icon>
        </div>
      }
      @if (getActionType === 'row-group') {
        <button (click)="collapseChanged()" mat-icon-button aria-label="Collapse this group">
          <mat-icon>
            {{ collapsed ? 'expand_more' : 'expand_less' }}
          </mat-icon>
        </button>
      }
    </div>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [NgIf, MatIconModule, MatButtonModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUEwQnZDLE1BQU0sT0FBTyw0QkFBbUMsU0FBUSw0QkFBa0M7SUF4QjFGOztRQXlCdUQsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNkLHFCQUFnQixHQUFHLElBQUksQ0FBQztLQUtqRjtJQUhDLElBQTBELGNBQWM7UUFDdEUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7OEdBTlUsNEJBQTRCO2tHQUE1Qiw0QkFBNEIscVNBckI3Qjs7Ozs7Ozs7Ozs7Ozs7O0dBZVQsMkRBSWUsYUFBYSxtTEFBRSxlQUFlOzsyRkFFbkMsNEJBQTRCO2tCQXhCeEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7aUJBQ2hEOzhCQUVzRCxTQUFTO3NCQUE3RCxXQUFXO3VCQUFDLDZCQUE2QjtnQkFDYyxnQkFBZ0I7c0JBQXZFLFdBQVc7dUJBQUMsZ0NBQWdDO2dCQUVhLGNBQWM7c0JBQXZFLFdBQVc7dUJBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29sbGFwc2UnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXQtZGF0YWdyaWQtY29sbGFwc2UnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjZGstZGF0YWdyaWQtY29sbGFwc2VcIj5cbiAgICAgIEBpZiAoZ2V0QWN0aW9uVHlwZSA9PT0gJ3Jvdy1nbG9iYWwnKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctZ2xvYmFsIGZsZXhcIj5cbiAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtLWF1dG9cIj5lZGl0X25vdGU8L21hdC1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIEBpZiAoZ2V0QWN0aW9uVHlwZSA9PT0gJ3Jvdy1ncm91cCcpIHtcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29sbGFwc2VDaGFuZ2VkKClcIiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNvbGxhcHNlIHRoaXMgZ3JvdXBcIj5cbiAgICAgICAgICA8bWF0LWljb24+XG4gICAgICAgICAgICB7eyBjb2xsYXBzZWQgPyAnZXhwYW5kX21vcmUnIDogJ2V4cGFuZF9sZXNzJyB9fVxuICAgICAgICAgIDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkQ29sbGFwc2VDb21wb25lbnQ8SXRlbT4gZXh0ZW5kcyBDZGtEYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50PEl0ZW0+IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtY29sbGFwc2UnKSBvdmVycmlkZSBob3N0Q2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1jb2xsYXBzaWJsZScpIG92ZXJyaWRlIGNvbGxhcHNpYmxlQ2xhc3MgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWNvbGxhcHNlZCcpIG92ZXJyaWRlIGdldCBjb2xsYXBzZWRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWQ7XG4gIH1cbn1cbiJdfQ==