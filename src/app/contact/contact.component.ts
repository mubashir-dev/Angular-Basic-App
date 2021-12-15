import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string | undefined;
  contact: Contact = {
    name: 'dd',
    email: '',
    message: ''
  };

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Contact Us'
  }

  submitContact() {
    console.log('Contact : ', this.contact);
  }

}
