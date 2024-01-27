import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactInfo: ContactInfo = {
    name: 'Suki MC Silva (he/him)',
    email: 'suki.m.c.silva@gmail.com'
  }; 

  constructor() { }

  ngOnInit(): void {
  }

}


interface ContactInfo {
  name: string,
  email: string,
  phone?: string,
  address?: string,
}
