import { Component, OnInit } from '@angular/core';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Storage } from '@capacitor/storage';
 

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // async start() {
  //   await Storage.set({key: INTRO_KEY, value: 'true'});
  // }

}
