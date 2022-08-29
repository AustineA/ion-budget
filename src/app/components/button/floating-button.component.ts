import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'fbc',
  template: `
    <div class="floating-button">
      <ion-button color="green-100" mode="ios" expand="block">
        <ion-icon name="add-outline"></ion-icon>
        {{ title }}
      </ion-button>
    </div>
  `,
  styles: [
    `
      .floating-button {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
      }

      ion-button {
        --border-radius: 1.25rem;
      }
    `,
  ],
})
export class FloatingButtonComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [FloatingButtonComponent],
  exports: [FloatingButtonComponent],
})
export class FloadtingButtonModule {}