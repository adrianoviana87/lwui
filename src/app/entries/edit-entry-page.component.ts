import { Component, OnInit } from '@angular/core';
import { faCoins, faSave, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormArray } from '@angular/forms';
import { EditEntryService } from './edit-entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-entry-page',
  templateUrl: './edit-entry-page.component.html',
  styleUrls: ['./edit-entry-page.component.scss']
})
export class EditEntryPageComponent implements OnInit {
  appIcon = faCoins;
  saveIcon = faSave;
  newTransactionIcon = faPlus;

  form: FormGroup;

  get transactionsForm(): FormArray {
    return this.service.transactionsForm;
  }

  constructor(
    private service: EditEntryService,
    private router: Router) {
    this.form = this.service.form;
  }

  ngOnInit(): void {
    // nothing
  }

  newTransaction(): void {
    this.service.setNewTransaction();
    this.router.navigate(['edit-transaction']);
  }

  editTransaction(index: number): void {
    this.service.setEditingTransaction(index);
    this.router.navigate(['edit-transaction']);
  }
}

