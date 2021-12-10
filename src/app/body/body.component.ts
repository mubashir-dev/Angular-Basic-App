import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  services: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.services = [
      {
        category: 'Development',
        startFrom: 250,
        title: 'Angular Development',
        content: "KFJSDKLJFLSDJFLS;DFJSDLKFJSLDFJSDLKFJSLDKFJSDLKFJSLDK",
        image: "https://cdn.pixabay.com/photo/2021/12/04/10/58/nature-6844982_1280.jpg"
      }, {
        category: 'Research',
        startFrom: 200,
        title: 'Node.Js Development',
        content: "KFJSDKLJFLSDJFLS;DFJSDLKFJSLDFJSDLKFJSLDKFJSDLKFJSLDK",
        image: "https://cdn.pixabay.com/photo/2020/04/18/17/06/decoration-5060006_1280.jpg"
      }, {
        category: 'Development',
        startFrom: 200,
        title: 'Cloud Hosting',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        image: "https://cdn.pixabay.com/photo/2020/04/18/17/06/decoration-5060006_1280.jpg"
      }, {
        category: 'Research',
        startFrom: 200,
        title: 'Requirement Engineering',
        content: "KFJSDKLJFLSDJFLS;DFJSDLKFJSLDFJSDLKFJSLDKFJSDLKFJSLDK",
        image: "https://cdn.pixabay.com/photo/2020/04/18/17/06/decoration-5060006_1280.jpg"
      },
    ];
  }

}
