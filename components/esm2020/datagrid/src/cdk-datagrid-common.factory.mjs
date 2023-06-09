import { Self } from '@angular/core';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { providerTokenFactory } from '@rescoped/provider/factory';
// @todo: rename to providerFactory
export const { DATAGRID_COMMON_PROVIDER, DATAGRID_COMMON_TOKEN } = providerTokenFactory('DATAGRID_COMMON', CdkDatagridCommonDirective, [Self]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbW1vbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtY29tbW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxtQ0FBbUM7QUFDbkMsTUFBTSxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLG9CQUFvQixDQUNyRixpQkFBaUIsRUFDakIsMEJBQTBCLEVBQzFCLENBQUMsSUFBSSxDQUFDLENBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBwcm92aWRlclRva2VuRmFjdG9yeSB9IGZyb20gJ0ByZXNjb3BlZC9wcm92aWRlci9mYWN0b3J5JztcblxuLy8gQHRvZG86IHJlbmFtZSB0byBwcm92aWRlckZhY3RvcnlcbmV4cG9ydCBjb25zdCB7IERBVEFHUklEX0NPTU1PTl9QUk9WSURFUiwgREFUQUdSSURfQ09NTU9OX1RPS0VOIH0gPSBwcm92aWRlclRva2VuRmFjdG9yeShcbiAgJ0RBVEFHUklEX0NPTU1PTicsXG4gIENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlLFxuICBbU2VsZl0sXG4pO1xuIl19