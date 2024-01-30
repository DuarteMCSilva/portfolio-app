import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-arrows',
  templateUrl: './nav-arrows.component.html',
  styleUrls: ['./nav-arrows.component.scss']
})
export class NavArrowsComponent implements OnInit {

  @Input() prevRoute?: RouteInfo;
  @Input() nextRoute?: RouteInfo;

  constructor() { }

  ngOnInit(): void {
  }
}

interface RouteInfo {
  name: string,
  link: string
}
