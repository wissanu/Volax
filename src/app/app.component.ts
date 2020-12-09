import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-site-b';
  positionMap = {
    street: "สุขุมวิท",
    num: "1",
    city: "แกลง"
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;

  ngOnInit(){
    (function ($) {
      $('#carouselExampleControls').on('slide.bs.carousel', function (e) {
        var inner = document.querySelector('.carousel-inner');
        var controls = document.querySelectorAll('.controls');
          if (e.direction === 'left') {
        		controls[0].className = 'controls class-active';
          }
          if (e.direction === 'right') {
        		controls[1].className = 'controls class-active'
          }

          if (e.relatedTarget == inner.lastElementChild) {
            controls[1].className = 'controls class-fade'
          }
          if (e.relatedTarget == inner.firstElementChild) {
            controls[0].className = 'controls class-fade'
          }
        })
    })(jQuery);
  }
  /*@HostListener('window:scroll', ['$event']) onWindowScroll(_e: any) {
      let element = document.querySelector('.navbar');
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('bg-color-disable');
      } else {
        element.classList.remove('bg-color-disable');
      }
    }*/


}
