import { Component } from '@angular/core';
import { jobs } from '../jobs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  jobNames: jobs[] = [
    {
      name : "UX/UI",
      company : "example",
      img: '../../assets/example.jpg'
    },
    {
      name : "UX/UI",
      company : "example",
      img: '../../assets/example.jpg'
    },
    {
      name : "UX/UI",
      company : "example",
      img: '../../assets/example.jpg'
    },
    {
      name : "UX/UI",
      company : "example",
      img: '../../assets/example.jpg'
    },
    {
      name : "UX/UI",
      company : "example",
      img: '../../assets/example.jpg'
    },
    {
      name : "UX/UI",
      company : "example",
      img: '../../assets/example.jpg'
    },
  ]

}
