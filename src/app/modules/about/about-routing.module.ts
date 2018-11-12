import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AboutComponent,
} from './pages/about/about.component';

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  }
];


export { aboutRoutes };