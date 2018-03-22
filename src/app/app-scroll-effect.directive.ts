import { Directive, ElementRef, HostListener } from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Directive({
  selector: '[pageScroll]'
})
export class AppScrollEffectDirective {

  constructor(private el: ElementRef) {
    PageScrollConfig.defaultScrollOffset = 10;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || this.el.nativeElement.documentElement.scrollTop || this.el.nativeElement.body.scrollTop || 0;
    if (number > 400) {
      $('p').css('transition', 'color 0.8s ease-in-out');
      $('p').css('color', '#222');
    } else if (number < 400) {
      $('p').css('transition', 'color 0.8s ease-in-out');
      $('p').css('color', '#f2f2f2');
    }

  }
}
