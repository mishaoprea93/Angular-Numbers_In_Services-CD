import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import {DataService} from './data.service';
import { OmegaComponent } from './omega/omega.component'


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    OmegaComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
