import { Directive, OnInit } from '@angular/core';
import * as textillate from 'textillate';

@Directive({
  selector: '[appAppLoaderName]'
})
export class AppHeaderNameDirective implements OnInit {

  constructor() { }
  ngOnInit() {
    textillate({
      in: { effect: 'rollIn' }
    });
  }
}
