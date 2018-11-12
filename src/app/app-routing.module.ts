import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { aboutRoutes } from './modules/about/about-routing.module';
import { settingsRoutes } from './modules/settings/settings-routing.module';
import { gameRoutes } from './modules/game/game-routing.module';
import { StartAppMenuComponent } from './modules/start-app-menu/start-app-menu.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },

  {
    path: '',
    children: [
      ...aboutRoutes,
      ...settingsRoutes,
      ...gameRoutes,
    ],
  },

  { path: 'start', component: StartAppMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
