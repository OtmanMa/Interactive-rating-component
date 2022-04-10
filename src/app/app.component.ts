import { Component, ViewChild } from '@angular/core';
import { State } from "./other/state";
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stepOneYet?: boolean;

  constructor(
    private state: State
  ) {}

  ngOnInit(): void {
    this.state.getState()
      .subscribe(state => {
        this.stepOneYet = state.step;
      });
  }

  ngDoCheck(): void {
    this.state.getState()
      .subscribe(state => {
        this.stepOneYet = state.step;
      });
  }

  onReset() {
    this.state.resetState();
  }
}
