import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular App';
  menus: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.menus = [{
      title: 'Home',
      permalink: '/'
    },
      {
        title: 'About',
        permalink: '/about'
      },
      {
        title: 'Contact',
        permalink: '/contact'

      },
      {
        title: 'Services',
        permalink: 'services',
        sub: [
          'App Development',
          'Web Development',
          'Backend Development',
          'Modern Frontend'
        ]
      }];
  }

}
