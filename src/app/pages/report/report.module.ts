import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';
import { CategoryListModule } from 'src/app/components/budget/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule,
    CategoryListModule,
  ],
  declarations: [ReportPage],
})
export class ReportPageModule {}
