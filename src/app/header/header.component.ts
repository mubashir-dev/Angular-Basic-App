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
      title: 'Home'
    },
      {
        title: 'About'
      },
      {
        title: 'Contact'
      },
      {
        title: 'Services',
        sub: [
          'App Development',
          'Web Development',
          'Backend Development',
          'Modern Frontend'
        ]
      }];
  }

}
