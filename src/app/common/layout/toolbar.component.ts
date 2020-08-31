import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToolbarItem } from './toolbar-item';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  items: Array<ToolbarItem> = [];

  @Input()
  title = '';

  @Input()
  icon: any;

  @Output()
  itemClick = new EventEmitter<string>();

  onItemClick(item: ToolbarItem): void {
    this.itemClick.emit(item.id);
  }
}

