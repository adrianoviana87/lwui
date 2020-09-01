import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Entry } from './entry';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class EditEntryService {
  form: FormGroup;

  editingTransactionForm: FormGroup;
  editingTransactionIndex = -1;

  editingEntry: Entry;

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

    this.editingTransactionForm = this.createTransactionForm();
    this.load({
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

  createTransactionForm(item: Transaction = { account: '', value: null, quantity: 1, commodity: 'BRL'}): FormGroup {
    return this.fb.group({
      account: [item.account],
      value: [item.value],
      quantity: [item.quantity],
      commodity: [item.commodity]
    });
  }

  updateTransactionForm(form: FormGroup, item: Transaction): void {
    form.get('account').setValue(item.account);
    form.get('value').setValue(item.value);
    form.get('quantity').setValue(item.quantity);
    form.get('commodity').setValue(item.commodity);
  }

  load(entry: Entry): void {
    this.editingEntry = entry;
    this.form.get('title').setValue(entry.title);
    this.form.get('date').setValue(entry.date);
    this.transactionsForm.clear();
    for (const item of entry.transactions) {
      this.transactionsForm.push(this.createTransactionForm(item));
    }
  }

  setEditingTransaction(index: number): void {
    this.editingTransactionIndex = index;
    this.editingTransactionForm.setValue(this.transactionsForm.at(index).value);
  }

  setNewTransaction(): void {
    this.editingTransactionIndex = -1;
    this.editingTransactionForm.reset();
  }

  saveEditingTransaction(): void {
    if (this.editingTransactionIndex >= 0) {
      const transactionForm = this.transactionsForm.at(this.editingTransactionIndex) as FormGroup;
      this.updateTransactionForm(transactionForm, this.editingTransactionForm.value as Transaction);
    } else {
      const transactionForm = this.createTransactionForm(this.editingTransactionForm.value as Transaction);
      this.transactionsForm.push(transactionForm);
    }
  }
}
