import { Component, ViewChild } from '@angular/core';
import { State } from "./other/state";

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
