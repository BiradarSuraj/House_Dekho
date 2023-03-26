import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      name: 'Birla House',
      type: 'House',
      price: 12000,
    },
    {
      Id: 2,
      name: 'Mannat Villa',
      type: 'Villa',
      price: 120000,
    },
    {
      Id: 3,
      name: 'AAA House',
      type: 'House',
      price: 17000,
    },
    {
      Id: 4,
      name: 'ZZZ House',
      type: 'House',
      price: 45000,
    },
    {
      Id: 5,
      name: 'Taj House',
      type: 'House',
      price: 690000,
    },
    {
      Id: 6,
      name: 'Star Duplex',
      type: 'Duplex',
      price: 1690000,
    }
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
