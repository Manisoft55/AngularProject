import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsDetailsComponent } from './carts-details/carts-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TestFormComponent } from './test-form/test-form.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ActivatedRouteComponent } from './activated-route/activated-route.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditDetailsComponent } from './user-edit-details/user-edit-details.component';
import { AsyncCallsComponent } from './async-calls/async-calls.component';
import { HeaderInterceptor } from './custom-header.interceptor';
import { UserInfoViewComponent } from './user-info-view/user-info-view.component';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';
import { RxJsComponent } from './rx-js/rx-js.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PostArticleComponent } from './post-article/post-article.component';
import { BodmasRuleComponent } from './bodmas-rule/bodmas-rule.component';

@NgModule({
  declarations: [
    AppComponent,
    CartsDetailsComponent,
    TemplateDrivenFormComponent,
    TestFormComponent,
    UserInformationComponent,
    PageNotFoundComponent,
    ActivatedRouteComponent,
    UserDetailsComponent,
    UserEditDetailsComponent,
    AsyncCallsComponent,
    UserInfoViewComponent,
    ViewChildrenExampleComponent,
    RxJsComponent,
    UserEditComponent,
    PostArticleComponent,
    BodmasRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
