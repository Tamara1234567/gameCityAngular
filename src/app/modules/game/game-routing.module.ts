import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  GameComponent,
} from './pages/game/game.component';


const gameRoutes: Routes = [
  {
    path: 'game',
    component: GameComponent,
  }
];
export { gameRoutes };