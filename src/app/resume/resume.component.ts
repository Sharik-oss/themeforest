import { Component, OnInit } from '@angular/core';
import { education } from '../education';
import { experience } from '../experience';
import Aos from 'aos'
import 'aos/dist/aos.css';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  educations: education[] = [
    {
      name: "Mater of comupter science",
      year: "2019 - 2023",
      university: "Georgian Technical University",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      name: "Bachelor of comupter science",
      year: "2019 - 2023",
      university: "Georgian Technical University",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      name: "Mater of comupter science",
      year: "2019 - 2023",
      university: "Georgian Technical University",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
  ]

  expericences: experience[] = [
    {
      name: "Developer",
      year: "2021 - Present",
      company: "Example Company",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      name: "Developer",
      year: "2017 - 2018",
      company: "Example Company",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      name: "Developer",
      year: "2019 - 2020",
      company: "Example Company",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
    
  ]

  ngOnInit(): void {
    Aos.init()
    Aos.refresh()
}

}
