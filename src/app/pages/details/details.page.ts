import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { budgets } from 'src/app/services/shared/budget';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  budget: any;
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getBudget();
  }

  getBudget() {
    this.budget = budgets.find((b) => b.id == this.id);
  }
}