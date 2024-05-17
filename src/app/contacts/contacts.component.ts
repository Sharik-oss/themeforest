import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  emailAdresses: string[] = [
    "example@mail.com",
    "info@support.com"
  ]

  phones: string[] = [
    "+995-55-55-55",
    "+995-55-55-55"
  ]

  addesses: string[] = [
    "7 Rockland St.Brownsburg, IN 46112",
    "995 Sunbeam Street North Canton, OH 44720"
  ]
}
