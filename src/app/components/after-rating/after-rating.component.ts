import { Component, OnInit } from '@angular/core';
import { State } from "../../other/state";
import { filter } from "rxjs";

@Component({
  selector: 'app-after-rating',
  templateUrl: './after-rating.component.html',
  styleUrls: ['./after-rating.component.scss']
})
export class AfterRatingComponent implements OnInit {
  currentRating?: number;

  constructor(
    private state: State
  ) { }

  ngOnInit(): void {
    this.state.obsState
      .pipe(filter(state => state.currentSelect !== null))
      .subscribe(state => {
        this.currentRating = (typeof state.currentSelect === 'number') ? state.currentSelect : undefined;
      });
  }

}
