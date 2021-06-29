import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Part1Component} from "./part1/part1.component";
import {Part2Component} from "./part2/part2.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'part1',
  },
  {
    path: 'part1',
    component: Part1Component,
    data: {
      breadcrumb: 'Part 1',
    },
  },
  {
    path: 'part2',
    component: Part2Component,
    data: {
      breadcrumb: 'Part 2',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule { }
