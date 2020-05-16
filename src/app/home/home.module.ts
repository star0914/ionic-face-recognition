import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../widgets/components/explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './home-routing.module';
import {ComponentModule} from '../widgets/component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
