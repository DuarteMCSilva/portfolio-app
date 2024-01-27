import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOptions: NavOption[] = [];

  constructor(public activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.navOptions = [
      { name: 'Home', url: '/home' },
      { name: 'Portfolio', url: '/portfolio' },
      { name: 'Curriculum', url: '/cv' },
      { name: 'Contacts', url: '/contacts' }
    ];
  }
  
}

interface NavOption {
  name: string,
  url: string,
}
