import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  @Input() bike:any;
  @Input() caller:any;
  constructor() { }

  ngOnInit(): void {
    console.log("!!!",this.bike);
  }

}
