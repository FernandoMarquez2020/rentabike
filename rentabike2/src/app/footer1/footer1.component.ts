import { Component, OnInit } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component implements OnInit {
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit(): void {
  }

}
