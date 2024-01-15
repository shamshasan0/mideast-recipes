import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MealsPageComponent } from './pages/meals-page/meals-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'meals', children: [
      { path: 'breakfast', component: MealsPageComponent },
      { path: 'lunch', component: MealsPageComponent },
      { path: 'dinner', component: MealsPageComponent },
      { path: 'dessert', component: MealsPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
