import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

type HomeContent = {
  moon: string,
  meals:string []
};

export class HomeComponent {
  content: HomeContent = {
    moon: "🌙",
    meals:["Breakfast", "Lunch", "Dinner", "Dessert"]
  } 
}
