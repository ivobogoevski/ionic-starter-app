import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  environment: string;
  api: string;

  constructor() {
    this.environment = environment.name;
    this.api = environment.api;
  }

}
