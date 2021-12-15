import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title:string|undefined;
  constructor() { }

  ngOnInit(): void {
    this.title="How We Came into Existence"
  }

}
