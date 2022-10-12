import {AfterContentChecked, AfterContentInit, Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked, AfterContentInit {

  customDataFromParent = ''

  setCustomDataToChild() {
    let random = Math.floor(Math.random() * 10);
    this.customDataFromParent = 'Custom data from Parent Component ' + random;
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit was invoked')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked was invoked')
  }
}
