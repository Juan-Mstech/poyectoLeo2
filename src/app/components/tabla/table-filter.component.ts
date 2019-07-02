import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {
  priceFilter: number;

  priceTimeout: any;
  constructor() { }

  ngOnInit() {
  }

}
