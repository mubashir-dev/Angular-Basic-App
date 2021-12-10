import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imagesLinks: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.imagesLinks = [
      {
        active: true,
        heading: 'Angular App',
        paragraph: 'Angular Basic App with Components and Routing',
        path: "https://cdn.pixabay.com/photo/2021/12/04/10/58/nature-6844982_1280.jpg"
      }, {
        heading: 'Services',
        paragraph: 'Web,Mobile,Backend,Frontend',
        path: "https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_1280.jpg"
      }, {
        heading: 'About',
        paragraph: 'Angular is SPA Framework',
        path: "https://cdn.pixabay.com/photo/2020/04/18/17/06/decoration-5060006_1280.jpg"
      },
    ];
  }

}
