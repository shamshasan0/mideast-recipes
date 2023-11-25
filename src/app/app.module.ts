import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { FoodDetailsComponent } from './ui/pages/food-details/food-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
