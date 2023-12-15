import { Component } from '@angular/core';

import { UIAppServiceService } from './uiapp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIApp';
    constructor( private uiservices: UIAppServiceService ) {      
  }



}
