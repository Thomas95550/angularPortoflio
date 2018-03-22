import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as Typed from 'typed.js';
import * as anime from 'animejs';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})
export class AppAboutComponent implements OnInit {

  titleAbout = 'Retour';

  constructor(private router: Router) { }

  ngOnInit() {
    anime({
      targets: '.shape path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      delay: function(el, i) { return i * 100; },
      direction: 'normal',
      offset: 1500,
    });

    const textAnimes = new Typed('#typed2', {
      strings: ["Moi c'est Thomas", "Bonjour, moi c'est Thomas"],
      typeSpeed: 110,
      backSpeed: 145,
      smartBackspace: true, // this is a default
      showCursor: true,
      startDelay: 2000,
    });
  }



}
