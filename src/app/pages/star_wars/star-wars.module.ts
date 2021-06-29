import { NgModule } from '@angular/core';
import {Part1Component} from "./part1/part1.component";
import {Part2Component} from "./part2/part2.component";
import {StarWarsRoutingModule} from "./star-wars-routing.module";
import {CommonModule} from "@angular/common";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    Part1Component,
    Part2Component,
  ],
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    NgbTooltipModule
  ],
  exports: []
})
export class starWarsModule { }
