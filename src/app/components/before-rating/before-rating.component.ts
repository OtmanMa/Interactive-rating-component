import { Component, OnInit } from '@angular/core';
import { anItem } from "../../other/type";
import { State } from "../../other/state";

@Component({
  selector: 'app-before-rating',
  templateUrl: './before-rating.component.html',
  styleUrls: ['./before-rating.component.scss']
})
export class BeforeRatingComponent implements OnInit {
  allChilds?: anItem[] = [];

  constructor(
    private state: State
  ) {}

  ngOnInit(): void {
    this.state.obsState.subscribe( data => this.allChilds = data.items );

    console.log('before');
  }

  onClick(value: anItem): void {
    this.state.updateItems(value);
  }

  onSubmit(): void {
    this.state.updateSteps();
  }
}
