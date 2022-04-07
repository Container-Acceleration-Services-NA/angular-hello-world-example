import { Component } from '@angular/core';
import { AppService } from './configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world ';

  appData: any;

  constructor(private appService: AppService) {
      this.appData = this.appService.settings;
  }
}
