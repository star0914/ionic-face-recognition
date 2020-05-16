import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExploreContainerComponent} from './components/explore-container/explore-container.component';
import {HomeButtonGroupComponent} from './components/home-button-group/home-button-group.component';
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [
    ExploreContainerComponent, HomeButtonGroupComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ExploreContainerComponent, HomeButtonGroupComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    ExploreContainerComponent, HomeButtonGroupComponent
  ]
})

export class ComponentModule { }
