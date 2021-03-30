import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FsearcherPageRoutingModule } from './fsearcher-routing.module';

import { FsearcherPage } from './fsearcher.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FsearcherPageRoutingModule,
    PipesModule
  ],
  declarations: [FsearcherPage]
})
export class FsearcherPageModule {}
