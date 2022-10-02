import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { AsyncCallsComponent } from './async-calls/async-calls.component';
import { BodmasRuleComponent } from './bodmas-rule/bodmas-rule.component';
import { CartsDetailsComponent } from './carts-details/carts-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostArticleComponent } from './post-article/post-article.component';
import { RxJsComponent } from './rx-js/rx-js.component';
import { AuthGuard } from './services/auth.guard';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TestFormComponent } from './test-form/test-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditDetailsComponent } from './user-edit-details/user-edit-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserInfoViewComponent } from './user-info-view/user-info-view.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';


const routes: Routes = [
  { path: 'cart-details', component: CartsDetailsComponent, canActivate: [AuthGuard] },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'test-form', component: TestFormComponent },
  { path: 'post-article', component: PostArticleComponent},
  { path: 'bodmas', component: BodmasRuleComponent },
  { path: 'user-info', component: UserInformationComponent,
    children: [
      { path: 'edit', component: UserEditComponent }
    ]
},
  { path: 'user-information', pathMatch: "full", redirectTo: "user-info" },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'activated-route/:routeid', component: ActivatedRouteComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-edit', component: UserEditDetailsComponent },
  { path: 'async-calls', component: AsyncCallsComponent },
  { path: 'user-info-view-child', component: UserInfoViewComponent },
  { path: 'view-children-example', component: ViewChildrenExampleComponent },
  {
    path: 'rx-js', component: RxJsComponent,
    children: [{
      path: '', redirectTo: 'overview', pathMatch: 'full'
    },
    {
      path: 'test', component: TestFormComponent
    }]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
