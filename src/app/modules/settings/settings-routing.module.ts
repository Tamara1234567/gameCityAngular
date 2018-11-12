import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SettingsComponent,
} from './pages/settings/settings.component';


const settingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  }
];


export { settingsRoutes };