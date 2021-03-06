import { Injectable, NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GtagModule } from 'angular-gtag';
import { MoonbaseModule } from './components/moonbase/moonbase.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NavModule } from './components/moonbase/nav/nav.module';
import { SidebarModule } from './components/base/sidebar/sidebar.module';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxUiLoaderModule,  SPINNER } from 'ngx-ui-loader';
import {MatStepperModule} from '@angular/material/stepper';



@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    GtagModule.forRoot({ trackingId: 'G-5Q9LF9T9Q6', trackPageviews: true }),
    MoonbaseModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NavModule,
    SidebarModule,
    NgApexchartsModule,
    NgxUiLoaderModule,
    MatStepperModule
  ],
  providers: [
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
