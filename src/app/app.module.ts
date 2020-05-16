import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPage} from './login/login.page';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio';
import {LoginPageModule} from './login/login.module';
import {ComponentModule} from './widgets/component.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [LoginPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LoginPageModule,
    ComponentModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FingerprintAIO
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
