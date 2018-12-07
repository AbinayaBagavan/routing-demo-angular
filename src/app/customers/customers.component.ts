import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customerDetails:any=[{ name: 'Sandy',location:'Pune' },
  { name: 'Betty',location:'Mumbai' },
  { name: 'George',location:'Bangalore' }];
}