import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Aos from 'aos'
import 'aos/dist/aos.css';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent  implements OnInit{
  
  ngOnInit(): void {
      Aos.init()
      Aos.refresh()
  }
}
