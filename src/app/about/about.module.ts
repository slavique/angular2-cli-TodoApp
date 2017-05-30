import { NgModule } from '@angular/core';
import {AboutComponent} from "./about.component";
import {aboutRouting} from "./about.routing";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    aboutRouting
  ]

})
export class AboutModule { }
