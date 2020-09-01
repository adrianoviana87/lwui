import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';
import { EditEntryService } from './edit-entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-transaction-page',
  templateUrl: './edit-transaction-page.component.html',
  styleUrls: ['./edit-transaction-page.component.scss']
})
export class EditTransactionPageComponent implements OnInit {
  backIcon = faArrowLeft;
  saveIcon = faSave;

  get form(): FormGroup {
    return this.service.editingTransactionForm;
  }

  constructor(
    private service: EditEntryService,
    private router: Router) {
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

  goBack(): void {
    this.router.navigate(['edit-entry']);
  }

  save(): void {
    this.service.saveEditingTransaction();
    this.goBack();
  }
}

