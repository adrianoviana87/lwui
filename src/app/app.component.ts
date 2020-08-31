import { Component } from '@angular/core';
import {ToolbarItem} from './common/layout/toolbar-item';
import { faFile, faSave, faAddressBook } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toolbarItems: Array<ToolbarItem> = [];
  appIcon = faFile;

  constructor() {
    this.toolbarItems = [
      {
        text: 'Save',
        id: 'save',
        icon: faSave,
      },
      {
        text: 'Address',
        id: 'address',
        icon: faAddressBook,
      }
    ];
  }
}
