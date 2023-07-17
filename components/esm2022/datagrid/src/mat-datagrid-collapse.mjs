import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { CdkDatagridCollapseComponent } from './cdk-datagrid-collapse';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/button";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridCollapseComponent, isStandalone: true, selector: "mat-datagrid-collapse", host: { properties: { "class.mat-datagrid-collapse": "this.hostClass", "class.mat-datagrid-collapsible": "this.collapsibleClass", "class.mat-datagrid-collapsed": "this.collapsedClass" } }, usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFdkMsTUF5QmEsNEJBQW1DLFNBQVEsNEJBQWtDO0lBekIxRjs7UUEwQnVELGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7S0FLakY7SUFIQyxJQUEwRCxjQUFjO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzhHQU5VLDRCQUE0QjtrR0FBNUIsNEJBQTRCLHFTQXRCN0I7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQsNERBSVMsSUFBSSw0RkFBRSxhQUFhLG1MQUFFLGVBQWU7O1NBRW5DLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQXpCeEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztpQkFDaEQ7OEJBRXNELFNBQVM7c0JBQTdELFdBQVc7dUJBQUMsNkJBQTZCO2dCQUNjLGdCQUFnQjtzQkFBdkUsV0FBVzt1QkFBQyxnQ0FBZ0M7Z0JBRWEsY0FBYztzQkFBdkUsV0FBVzt1QkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RhdGFncmlkQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb2xsYXBzZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hdC1kYXRhZ3JpZC1jb2xsYXBzZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNkay1kYXRhZ3JpZC1jb2xsYXBzZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldEFjdGlvblR5cGUgPT09ICdyb3ctZ2xvYmFsJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWdsb2JhbCBmbGV4XCI+XG4gICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibS1hdXRvXCI+ZWRpdF9ub3RlPC9tYXQtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldEFjdGlvblR5cGUgPT09ICdyb3ctZ3JvdXAnXCI+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbGxhcHNlQ2hhbmdlZCgpXCIgbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJDb2xsYXBzZSB0aGlzIGdyb3VwXCI+XG4gICAgICAgICAgPG1hdC1pY29uPlxuICAgICAgICAgICAge3sgY29sbGFwc2VkID8gJ2V4cGFuZF9tb3JlJyA6ICdleHBhbmRfbGVzcycgfX1cbiAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkQ29sbGFwc2VDb21wb25lbnQ8SXRlbT4gZXh0ZW5kcyBDZGtEYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50PEl0ZW0+IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtY29sbGFwc2UnKSBvdmVycmlkZSBob3N0Q2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1jb2xsYXBzaWJsZScpIG92ZXJyaWRlIGNvbGxhcHNpYmxlQ2xhc3MgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWNvbGxhcHNlZCcpIG92ZXJyaWRlIGdldCBjb2xsYXBzZWRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWQ7XG4gIH1cbn1cbiJdfQ==