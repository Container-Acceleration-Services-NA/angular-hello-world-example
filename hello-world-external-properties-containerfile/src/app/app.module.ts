import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './configuration.service';
import { HttpClientModule } from '@angular/common/http';

export function init_app(appService: AppService) {
  return () => appService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: init_app,
    deps: [AppService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


