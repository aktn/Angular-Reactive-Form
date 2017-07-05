import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserFormModule } from './user-form/user-form.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    UserFormModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
