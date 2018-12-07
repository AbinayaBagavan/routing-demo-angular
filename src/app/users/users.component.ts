import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 userDetails:any=[{ id: 1, name: 'Rajesh' },
  { id: 2, name: 'Ritesh' },
  { id: 3, name: 'Snephal' }];

}