import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/models/interface';
import { HOMEPAGE_MOCKS } from 'src/app/mocks/mocks';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  content !: HomePage;
  // 🐸
  ngOnInit(): void {
      this.content = HOMEPAGE_MOCKS;
  }
}


