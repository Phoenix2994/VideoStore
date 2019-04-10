import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  expression: Subject<string>;

  constructor() {
    this.expression = new Subject<string>();
  }
}


