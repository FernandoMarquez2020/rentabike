import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rentabike';
  faCoffee = faCoffee;
  constructor(private elementRef: ElementRef){     
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage='radial-gradient(white 20%, #212529)';
  }
}

  


