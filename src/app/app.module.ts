import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { VerticalComponent } from './vertical/vertical.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { PieComponent } from './pie/pie.component';
import { ComboComponent } from './combo/combo.component';
import { ActivateGuard} from './activate.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StateComponent,
    DistrictComponent,
    VerticalComponent,
    LineChartComponent,
    TimeSeriesComponent,
    DoughnutComponent,
    PieComponent,
    ComboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
