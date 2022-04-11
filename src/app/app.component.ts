import { Component, OnInit, ViewChild } from '@angular/core';
import { State } from "./other/state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stepOneYet?: boolean;

  constructor(
    private state: State
  ) {}

  ngOnInit(): void {
    this.state.obsState.subscribe( data => this.stepOneYet = data.step );
  }

  onReset() {
    this.state.resetState();
  }

  ngOnDestroy(): void {
    console.log("hello world");
    this.state.obsState.unsubscribe();
  }
}
