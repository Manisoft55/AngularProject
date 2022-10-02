import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { AngularSubPageComponent, DemoPipe, DisplayOfferPrice, OfferPrice } from './angular-sub-page/angular-sub-page.component';
import { AngularTestPageComponent } from './angular-test-page/angular-test-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { UserServiceService } from './services/user-service.service';
import { EmployeeInformationModule } from './employee-information/employee-information.module';
import { ForeachComponent } from './foreach/foreach.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { UnitTestCompComponent } from './unit-test-comp/unit-test-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    AngularSubPageComponent,
    AngularTestPageComponent,
    DemoPipe,
    DisplayOfferPrice,
    OfferPrice,
    ForeachComponent,
    DesignPageComponent,
    UnitTestCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MainModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
