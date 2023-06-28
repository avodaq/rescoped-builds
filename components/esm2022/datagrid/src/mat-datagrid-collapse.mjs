import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { CdkDatagridCollapseComponent } from './cdk-datagrid-collapse';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
class MatDatagridCollapseComponent extends CdkDatagridCollapseComponent {
    constructor() {
        super(...arguments);
        this.hostClass = true;
        this.collapsibleClass = true;
    }
    get collapsedClass() {
        return this.collapsed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridCollapseComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridCollapseComponent, selector: "mat-datagrid-collapse", host: { properties: { "class.mat-datagrid-collapse": "this.hostClass", "class.mat-datagrid-collapsible": "this.collapsibleClass", "class.mat-datagrid-collapsed": "this.collapsedClass" } }, usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { MatDatagridCollapseComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridCollapseComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBRXZFLE1BdUJhLDRCQUFtQyxTQUFRLDRCQUFrQztJQXZCMUY7O1FBd0J1RCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2QscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0tBS2pGO0lBSEMsSUFBMEQsY0FBYztRQUN0RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs4R0FOVSw0QkFBNEI7a0dBQTVCLDRCQUE0QixpUkFwQjdCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUOztTQUlVLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQXZCeEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQUVzRCxTQUFTO3NCQUE3RCxXQUFXO3VCQUFDLDZCQUE2QjtnQkFDYyxnQkFBZ0I7c0JBQXZFLFdBQVc7dUJBQUMsZ0NBQWdDO2dCQUVhLGNBQWM7c0JBQXZFLFdBQVc7dUJBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29sbGFwc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXQtZGF0YWdyaWQtY29sbGFwc2UnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjZGstZGF0YWdyaWQtY29sbGFwc2VcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRBY3Rpb25UeXBlID09PSAncm93LWdsb2JhbCdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdy1nbG9iYWwgZmxleFwiPlxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm0tYXV0b1wiPmVkaXRfbm90ZTwvbWF0LWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRBY3Rpb25UeXBlID09PSAncm93LWdyb3VwJ1wiPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjb2xsYXBzZUNoYW5nZWQoKVwiIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiQ29sbGFwc2UgdGhpcyBncm91cFwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5cbiAgICAgICAgICAgIHt7IGNvbGxhcHNlZCA/ICdleHBhbmRfbW9yZScgOiAnZXhwYW5kX2xlc3MnIH19XG4gICAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkQ29sbGFwc2VDb21wb25lbnQ8SXRlbT4gZXh0ZW5kcyBDZGtEYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50PEl0ZW0+IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtY29sbGFwc2UnKSBvdmVycmlkZSBob3N0Q2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1jb2xsYXBzaWJsZScpIG92ZXJyaWRlIGNvbGxhcHNpYmxlQ2xhc3MgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWNvbGxhcHNlZCcpIG92ZXJyaWRlIGdldCBjb2xsYXBzZWRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWQ7XG4gIH1cbn1cbiJdfQ==