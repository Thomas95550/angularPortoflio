import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[AppAboutTextillate]'
})
export class AppAboutTextillateDirective implements OnInit {

  constructor() { }

  ngOnInit() {
    const test = $('#textillate p').textillate({
      initialDelay: 1800,
      outEffects: [ 'fadeOut' ],
      in: {
        effect: 'fadeIn',
        delayScale: 1.5,
        delay: 20,
        sync: false,
        shuffle: true
      },
      out: {
        effect: 'fadeOut',
        delayScale: 2,
        delay: 60,
        sync: false,
        shuffle: true,
        reverse: false,
      },
      callback: function () {

      },
      type: 'char',
    });
  }
}
