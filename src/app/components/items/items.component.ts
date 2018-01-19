import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../core/models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  loading: boolean;
  items: Item[];
  editState = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loading = true;
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
      this.loading = false;
    });
  }

  deleteItem(event, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
