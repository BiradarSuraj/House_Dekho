import { Component } from "@angular/core";


@Component({
  selector:'app-property-card',
  // template:`<h1>I am Card<h1>`
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {
  property:any = {
    "Id":1,
    "name":"Birla House",
    "type":"House",
    "price":12000
  }
}
