import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FormsComponent } from './forms/forms.component';
import { ShowhidePasswordDirective } from './showhide-password.directive';


@NgModule({
  declarations: [
    AppComponent,
    MaincontentComponent,
    FormsComponent,
    ShowhidePasswordDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
