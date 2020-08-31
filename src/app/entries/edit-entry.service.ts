import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root'
})
export class EditEntryService {
  form: FormGroup;

  get transactionsForm(): FormArray {
    return this.form.get('transactions') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      tags: [''],
      date: [null],
      transactions: fb.array([])
    });
  }

  load(entry: Entry): void {
    this.form.get('title').setValue(entry.title);
    this.form.get('date').setValue(entry.date);
    /* this.form.setValue(entry); */
    this.transactionsForm.clear();
    for (const item of entry.transactions) {
      this.transactionsForm.push(this.fb.group({
        account: [item.account],
        value: [item.value],
        quantity: [item.quantity],
        commodity: [item.commodity],
      }));
    }
  }
}
