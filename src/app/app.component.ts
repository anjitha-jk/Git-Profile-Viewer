import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { getLocaleDateFormat } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-viewer';
}
