import { Injectable } from "@angular/core";
import { anItem, aState } from "./type";
import { from, Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class State {
  state: aState;

  constructor() {
    this.state = this.initAState();
  }

  initAState(): aState {
    const getLocalState = localStorage.getItem('aState');

    if (getLocalState === null) {
      return this.aNewState();
    } else {
      return JSON.parse(getLocalState);
    }
  }

  resetState() {
    const childsForRatings = [];

    for (let i = 0; i < 5; i++) {
      const newItem = {
        name: (i + 1).toString(),
        classes: 'rating'
      };

      childsForRatings.push(newItem)
    }

    this.state.items = childsForRatings;
    this.state.step = true;
    this.state.currentSelect = null;

    this.saveCurrentState();
  }

  aNewState(): aState {
    const childsForRatings = [];

    for (let i = 0; i < 5; i++) {
      const newItem = {
        name: (i + 1).toString(),
        classes: 'rating'
      };

      childsForRatings.push(newItem)
    }

    return {
      name: 'state',
      items: childsForRatings,
      step: true,
      currentSelect: null
    }
  }

  getState(): Observable<aState> {
    return of(this.state);
  }

  saveCurrentState(): void {
    localStorage.setItem('aState', JSON.stringify(this.state));
  }

  updateItems(anItem: anItem) {
    this.state.items
      ?.filter(item => {
        if (item.classes === 'rating selectedRating') {
              item.classes = 'rating';
            }
      });

    this.state.items
      ?.filter(item => {
        if (item === anItem) {
          item.classes = 'rating selectedRating';
          this.state.currentSelect = Number(item.name);
        }
      });

    this.saveCurrentState();
  }

  updateSteps(): void {
    if (this.state.currentSelect !== null) {
      this.state.step = !this.state.step;
    }
    this.saveCurrentState();
  }
}