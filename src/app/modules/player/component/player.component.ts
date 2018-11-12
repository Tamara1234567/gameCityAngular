 import { Component, OnInit } from '@angular/core';
import * as randomName from 'random-name';
import * as randomString from 'random-string';
import * as randomColor from 'randomcolor';
import { PlayerOptions } from '../../../interfaces';
import { UserType } from '../../../types';

 @Component({
   selector: 'app-player',
   templateUrl: './player.component.html',
   styleUrls: ['./player.component.css']
 })
 export class PlayerComponent implements OnInit {
  // public name: string;
  // public color: string;
  // public id: string;
  // public type: UserType;
  // constructor(options: PlayerOptions = {}) {
  // this.id = randomString.generate(7);
  //   this.color = options.color || randomColor({ luminosity: 'dark' });
  //   this.name = options.name || randomName.first();
  //   this.type = options.type || UserType.Computer;
  // }

   ngOnInit() {
   }
 }
