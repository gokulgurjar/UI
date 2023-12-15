import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UIAppServiceService} from './uiapp-service.service';
import { CommitComponent } from './commit/commit.component';



@NgModule({
  declarations: [
    AppComponent,
    CommitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UIAppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
