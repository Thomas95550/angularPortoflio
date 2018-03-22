import { Directive, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as anime from 'animejs';

@Directive({
  selector: '[app-loader]'
})

export class AppHeaderDirective implements OnInit {

  constructor(private router: Router) { }
  ngOnInit () {

    $('.fillLoader').css('display', 'none');

    const myObject = {
      Chargement: '0%'
    };
    anime({
      targets: myObject,
      Chargement: '100%',
      easing: 'easeInOutExpo',
      round: 1,
      duration: 5500,
      update: function() {
        var el = document.querySelector('#JSobjectProp pre');
        el.innerHTML = "<span id='loader-animated' style='height: 20px;width: 100%; position: absolute; text-align: center;top:0; bottom: 0; left: 0; right: 0; margin: auto;z-index: 9999'>" + myObject.Chargement + '</span>';
      },
      complete: function() {
        $('#loader-animated').css({'opacity': '0'});
      }
    });

    anime({
      targets: '#keyframes .el',
      translateX: [
        { value: 250, duration: 400, delay: 400, elasticity: 50 },
        { value: 0, duration: 400, delay: 400, elasticity: 10 }
      ],
      translateY: [
        { value: -40, duration: 300, elasticity: 100 },
        { value: 40, duration: 300, delay: 400, elasticity: 100 },
        { value: 0, duration: 100, delay: 400, elasticity: 100 },
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 800, easing: 'easeInElastic' },
        { value: 1, duration: 500, elasticity: 300 },
        { value: 4, duration: 100, delay: 800, easing: 'easeInElastic' },
        { value: 1, duration: 500, elasticity: 300 }
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 400, easing: 'easeInElastic' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 400, easing: 'easeInElastic' },
        { value: 1, duration: 450 }
      ],
      loop: 2,
      complete: function() {
        anime({
          targets: '#keyframes',
          height: ['10px', '1px'],
          width: ['60px', '100px'],
          top: ['25px', '-25px'],
          durationchange: 600,
          easing: 'easeOutExpo',
          run: function() {
            anime({
              targets: '#keyframes .el',
              height: ['10px', '1px'],
              width: ['10px', '1px'],
              borderRadius: ['0em', '2em'],
              top: '-560px',
              duration: 600,
              easing: 'easeOutExpo',
            });
            anime({
              targets: '#keyframes .elgauche',
              borderRadius: ['0em', '2em'],
              duration: 1000,
              height: ['10px', '1px'],
              width: ['10px', '1px'],
              top: '610px',
              easing: 'easeOutExpo',
            });
          },
          complete: function () {
            $('#JSobjectProp').css('display', 'none');
            anime({
              targets: '#keyframes',
              height: '0px',
              width: ['60px', '0px'],
              top: '-25px',
              durationchange: 600,
              easing: 'easeOutExpo',
            });
            $('.fillLoader').css('display', 'inherit');
            anime({
              targets: '.fillLoader',
              height: '1px',
              width: function () {
                return vh(70);
              },
              duration: 600,
              easing: 'easeOutExpo',
              run: function() {
                $('#keyframes').css('display', 'none');
              },
              complete: function () {
                setTimeout(function() {
                  test.textillate('out');
                  anime({
                    targets: '.fillLoader',
                    height: '1px',
                    width: '0px',
                    easing: 'easeOutExpo',
                  });
                  setTimeout(function() {
                    $('#AllCardContainer').css('display', 'block');
                    $('.center-text').css('display', 'none');

                    startLoadingApp();
                    anime({
                      targets: '#projectCard',
                      scale: [10, 1],
                      easing: 'easeOutExpo',
                    });
                    anime({
                      targets: '#aboutCard',
                      scale: [10, 1],
                      easing: 'easeOutExpo',
                    });
                    anime({
                      targets: '#contactCard',
                      scale: [10, 1],
                      easing: 'easeOutExpo',
                    });
                  }, 2000);
                }, 1000);
              },
              delay: 1000,
            });
          }
        });
      }
    });

    anime({
      targets: '#keyframes .elgauche',
      translateX: [
        { value: -250, duration: 400, delay: 400, elasticity: 50 },
        { value: 0, duration: 400, delay: 400, elasticity: 10 }
      ],
      translateY: [
        { value: 40, duration: 300, elasticity: 100 },
        { value: -40, duration: 300, delay: 400, elasticity: 100 },
        { value: 0, duration: 300, delay: 400, elasticity: 100 },
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 800, easing: 'easeInElastic' },
        { value: 1, duration: 500, elasticity: 300 },
        { value: 4, duration: 100, delay: 800, easing: 'easeInElastic' },
        { value: 1, duration: 500, elasticity: 300 }
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 400, easing: 'easeInElastic' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 400, easing: 'easeInElastic' },
        { value: 1, duration: 450 }
      ],
      loop: 2,
    });
    anime({
      targets: '#square-load',
      translateY: ['-40px', '0px', '-40px', '0px', '-20px', '0px'],
      duration: 1200,
      direction: 'alternate',
      loop: 2,
      easing: 'easeInCubic',
      complete: function() {
        $('#square-load').css('display', 'none');
        anime({
          targets: '#rectangle-load',
          rotate: '0',
          height: '0',
          durationchange: 600,
          easing: 'easeOutExpo',
        });
      }
    });

    const test = $('#textName p').textillate({
      initialDelay: 3500,
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

    /*
     startLoadingApp();
     */

    function startLoadingApp() {
      anime({
        targets: '.elment',
        translateY: function(el) {
          return el.getAttribute('data-Y');
        },
        duration: 1800,
        direction: 'alternate',
      });
    }
    function vh(v) {
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      return (v * h) / 100;
    }

  }
}
