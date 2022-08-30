import { Component, OnInit } from '@angular/core';
import { budgets } from 'src/app/services/shared/budget';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  budgets = [];

  constructor() {
    this.budgets = budgets;
  }

  ngOnInit() {}
}
