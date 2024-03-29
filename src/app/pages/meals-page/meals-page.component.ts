import { Component } from '@angular/core';
import { BREAKFAST_MEALS_PAGE, LUNCH_MEALS_PAGE, DINNER_MEALS_PAGE, DESSERT_MEALS_PAGE, ALL_MEALS_PAGE_MOCKS } from 'src/app/mocks/mocks';
import { MealsPage } from 'src/app/models/interface';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meals-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meals-page.component.html',
  styleUrl: './meals-page.component.scss'
})
export class MealsPageComponent implements OnInit {
  content !: MealsPage
  ngOnInit(): void {
    this.content = LUNCH_MEALS_PAGE;
    }
  }


