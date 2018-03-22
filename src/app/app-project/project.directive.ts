import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appProject]'
})
export class ProjectDirective implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
