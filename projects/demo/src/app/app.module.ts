import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LcuBrewingModule } from '@fathym-it/lcu-brewing-common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    LcuBrewingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LcuBrewingModule]
})
export class AppModule { }
