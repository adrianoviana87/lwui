import { Component, OnInit } from '@angular/core';
import { faCoins, faSave } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormArray } from '@angular/forms';
import { EditEntryService } from './edit-entry.service';

@Component({
  selector: 'app-edit-entry-page',
  templateUrl: './edit-entry-page.component.html',
  styleUrls: ['./edit-entry-page.component.scss']
})
export class EditEntryPageComponent implements OnInit {
  appIcon = faCoins;
  saveIcon = faSave;

  form: FormGroup;

  get transactionsForm(): FormArray {
    return this.service.transactionsForm;
  }

  constructor(private service: EditEntryService) {
    this.form = this.service.form;
  }

  ngOnInit(): void {
    this.service.load({
      title: 'Groceries',
      tags: null,
      date: new Date().toJSON(),
      transactions: [
        {
          value: -323.2,
          account: 'Income:Job1',
          quantity: 1,
          commodity: 'BRL'
        },
        {
          value: -33.32,
          account: 'Income:Job2',
          quantity: 1,
          commodity: 'BRL'
        },
        {
          value: -533.25,
          account: 'Income:Job4',
          quantity: 1,
          commodity: 'BRL'
        },
        {
          value: null,
          account: 'Assets:Bank',
          quantity: 1,
          commodity: 'BRL'
        },
      ]
    });
  }
}

