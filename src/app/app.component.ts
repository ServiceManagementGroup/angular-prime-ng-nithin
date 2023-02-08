import { Component } from '@angular/core';
import { LoadingService } from './services/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-poc-primeng';
  
  constructor(public loadingService: LoadingService) {

  }
}
