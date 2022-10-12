import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
})
export class ChildComponent implements DoCheck {

  ngDoCheck() {
    console.log('ngDoCheck was invoked from Child')
  }
}
