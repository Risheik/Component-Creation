import { Component, Input, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'Risheik';
  constructor(@Inject(MyserviceService)myserviceService){
    console.log(myserviceService);
    console.log("hi,this is component");
  }
  @HostListener('click',['$event'])
  onhostclick(event:Event){
    alert("Hello this side Risheik :),How aren you?");
  }
}
