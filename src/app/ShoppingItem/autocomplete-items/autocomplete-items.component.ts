import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';



@Component({
  selector: 'app-autocomplete-items',
  templateUrl: './autocomplete-items.component.html',
  styleUrls: ['./autocomplete-items.component.sass']
})

export class AutocompleteItemsComponent implements OnInit {
  
  control: FormControl = new FormControl();
  items = [
    {code:"ax1", count : 0, name:"papas local"},
    {code:"ax2", count : 0, name:"leche local"}
  ];

  itemsOriginals = this.items;
  selectedItems : {code:string, count:number, name: string}[] = [];//any[] = [];
  
  colsToShow = ["name","count"];


  @ViewChild(MatTable) table!: MatTable<any> ;
  
  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.items = this.itemsOriginals;
      this.items = this.items.filter(item => item.name.indexOf(valor) !== -1)
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent)
  {
    debugger;
    console.log(event.option.value);
    this.selectedItems.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  killSelectedItem(item: any)
  {
    const index = this.selectedItems.findIndex(s => s.name === item.name);
    this.selectedItems.splice(index,1);
    this.table.renderRows();
  }
}
