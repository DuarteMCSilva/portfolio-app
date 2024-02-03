import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: ProjectDetails[] = [
    {
      name: 'Happy Doggo',
      image: 'assets/images/happy-doggo.png',
      description: 'A simple application to search for dog images and discover some breeds.',
      url: '/happy-doggo',
      sourceUrl: 'https://github.com/DuarteMCSilva/happy-doggo'
    },

    {
      name: 'Popping Ball',
      image: 'assets/images/pop-ball.png',
      url: '/css-animations',
      description: 'An animation where a ball drops from its container.'
    },
    {
      name: 'Happy Doggo',
      image: 'assets/images/happy-doggo.png',
      description: 'A simple application to search for dog images and discover some breeds.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface ProjectDetails {
  name: string,
  image: string,
  description: string,
  url?: string,
  sourceUrl?: string
}
