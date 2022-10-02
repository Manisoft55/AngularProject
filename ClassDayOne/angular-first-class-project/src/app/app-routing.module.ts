import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularSubPageComponent } from './angular-sub-page/angular-sub-page.component';
import { AngularTestPageComponent } from './angular-test-page/angular-test-page.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { ForeachComponent } from './foreach/foreach.component';
import { TestComponentComponent } from './test-component/test-component.component';


const routes: Routes = [
  {path:'test-comp', component:TestComponentComponent},
  {path:'angular-sub-page', component:AngularSubPageComponent},
  {path:'angular-test-page', component:AngularTestPageComponent},
  {path: 'foreach', component: ForeachComponent},
  {path: 'design-page', component:DesignPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
