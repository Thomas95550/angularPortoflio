import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as anime from 'animejs';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent implements OnInit  {

  constructor(private router: Router) { }

  public routerLinkVariable = '/project';

  ngOnInit() {
    const body = $('body, html');
    this.router.events.subscribe((res) => {
      if (this.router.url.length < 6) { // Body  background css color change to lightwhite
        body.css({'transition': '1s all ease', 'background-color': '#404040', 'color': 'white'});
        body.removeClass('default-background');
        this.routerLinkVariable = '/project'; // retour Project
      } else if (this.router.url.length === 8 || this.router.url.length === 6) {
        this.routerLinkVariable = '/'; // retour Homepage
        body.css({'transition': '1s all ease', 'background-color': '#404040', 'color': 'white'});
      } else { // Body  background css color change to default
      this.routerLinkVariable = '/project'; // retour Homepage
      body.css({'transition': '1s all ease', 'background-color': '#fff', 'color': 'black'});
    }
    });
  }

  AnimationEl(title) {
    const width = $('#' + title).width();
    const right = $('#' + title).data('right');
    const DivPosition =  {
      left:  null,
      right: null
    };
    $('.el-card').each(function() {
      if (this.id !== title)  {
        $('#' + this.id).addClass('moveAway');
      }
      DivPosition.left = $('#' + title).css('left');
      DivPosition.right = $('#' + title).css('right');
    });

    if (this.routerLinkVariable !== '/') {
      OpenLoader();
    } else {
      CloseLoader();
      this.router.navigate(['/']);
    }
    function CloseLoader() {
      const test = [$('#' + title).find('h1').data('text')];
      $('html').animate({
        scrollTop: $('html').offset().top,
      }, 2000, 'easeInOutQuart');
      anime({
        targets: '#' + title,
        width: [100 + '%', 32 + '%'],
        right: [0 + 'px', vh(right) + 'px'],
        easing: 'easeInOutQuad',
        complete: function () {
          anime({
            targets: '.moveAway',
            translateY: [
              {value: 40, elasticity: 200},
              {value: 0},
            ],
            easing: 'easeInOutQuad',
            duration: function (el, i, l) {
              return 400 + (i * 200);
            },
            complete: function () {
              $('.el-card').removeClass('moveAway');
              $('#back').css('display', 'none');
              $('html').css('overflow', 'hidden');
              $('#' + title).find('h1').html(test);
              $('#' + title).removeClass('loader-open');
            }
          });
        }
      });
    }

    function OpenLoader() {
      if (!$('#' + title).hasClass('loader-open')) {
        const saveText = $('#' + title).find('h1').text();
        $('#' + title).find('h1').attr('data-text', saveText);
        $('#' + title).attr('data-right', DivPosition.right);
        $('#' + title).attr('data-left', DivPosition.left);
        anime({
          targets: '.moveAway',
          translateY: [
            {value: -40, elasticity: 200},
            {value: -1000},
          ],
          easing: 'easeInOutQuad',
          duration: function (el, i, l) {
            return 400 + (i * 200);
          },
          complete: function () {
            anime({
              targets: '#' + title,
              width: [32 + '%', 100 + '%'],
              right: [vh(right) + 'px', 0 + 'px'],
              easing: 'easeInOutQuad',
              complete: function () {
                $('html').css('overflow', 'inherit');
                $('html').animate({
                  scrollTop: $($('#' + title).attr('href')).offset().top,
                }, 2000, 'easeInOutQuart');
                $('#back').css('display', 'block');
                $('#' + title).find('h1').html('retour');
                $('#' + title).addClass('loader-open');
              }
            });
          }
        });
      }
    }

    function vh(v) {
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      return (v * h) / 100;
    }
  }

}
