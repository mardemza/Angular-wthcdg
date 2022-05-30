import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface DescriptionId {
  id: number;
  description: string;
}

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
})
export class SelectMultipleExample {
  fg = new FormGroup({
    toppings: new FormControl(),
  });

  toppingList: DescriptionId[] = [
    { id: 1, description: 'Extra cheese' },
    { id: 2, description: 'Mushroom' },
    { id: 3, description: 'Onion' },
    { id: 4, description: 'Pepperoni' },
    { id: 5, description: 'Sausage' },
    { id: 5, description: 'Tomato' },
  ];

  select(data: any) {
    alert(data.value);
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
