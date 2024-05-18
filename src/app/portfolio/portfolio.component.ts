import { Component, OnInit } from '@angular/core';
import { jobs } from '../jobs';

import Aos from 'aos'
import 'aos/dist/aos.css';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
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
    ngOnInit(): void {
      Aos.init()
      Aos.refresh()
    }


}
