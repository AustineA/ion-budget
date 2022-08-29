import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'budget-card',
  template: `
    <div class="budget-card">
      <div class="budget-card-header">
        <div>
          <img src="/assets/budget-icons/shopping.svg" alt="" />
          <ion-label>Shopping</ion-label>
        </div>

        <ion-icon name="chevron-forward-outline" color="accent-200"></ion-icon>
      </div>
      <div class="budget-card-meta">
        <div class="budget-card-meta-item">
          <span>Spent</span>
          <b>$250</b>
        </div>
        <div class="budget-card-meta-item">
          <span>Left</span>
          <b>$250</b>
        </div>
        <div class="budget-card-meta-item">
          <span>Limit</span>
          <b>$250</b>
        </div>
      </div>
      <div class="budget-card-meter">
        <ion-range [value]="50" disabled="true" class="range-meter"></ion-range>
      </div>
      <span class="budget-notice">
        🔥 Your burn rate for Shopping is on track
      </span>
    </div>
  `,
  styles: [
    `
      .budget-card {
        background: var(--ion-color-dark-200);
        min-height: 15.313rem;
        border-radius: 1.563rem;
        padding: 1rem;
      }

      .budget-card ion-label {
        font-weight: 590;
      }

      .budget-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--ion-color-dark-300);
        padding-bottom: 1rem;
      }

      .budget-card-header > div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .budget-card-meta {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
      }

      .budget-card-meta-item {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .budget-card-meta-item span {
        font-size: 0.87rem;
      }
      .budget-card-meter {
        margin-top: 1rem;
      }

      ion-range {
        --bar-background: rgba(92, 154, 247, 0.2);
        --bar-background-active: #5c9af7;
        --bar-height: 18px;
        --bar-border-radius: 8px;
        --knob-size: 0px;
        padding: 0;
      }

      .budget-notice {
        display: block;
        margin-top: 0.8rem;
      }
    `,
  ],
})
export class BudgetCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [BudgetCardComponent],
  exports: [BudgetCardComponent],
})
export class BudgetCardModule {}
