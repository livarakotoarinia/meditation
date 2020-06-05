import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedPageRoutingModule } from './med-routing.module';

import { MedPage } from './med.page';

import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedPageRoutingModule,
    RoundProgressModule
  ],
  declarations: [MedPage]
})
export class MedPageModule {}
