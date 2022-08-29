import { Component, OnInit } from '@angular/core';
import { budgets } from 'src/app/services/shared/budget';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  budgets = [];
  constructor() {
    this.budgets = budgets;
  }

  ngOnInit() {}
}
