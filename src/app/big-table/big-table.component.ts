import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

@Component({
  selector: 'app-big-table',
  // templateUrl: './big-table.component.html',
  styleUrls: ['./big-table.component.scss'],
  template: `
  <div class="content">
    <!-- The AG Grid component, with Dimensions, CSS Theme, Row Data, and Column Definition -->
    <ag-grid-angular
      style="width: 100%; height: 550px;"
      class="ag-theme-balham"
      [rowData]="rowData"
      [columnDefs]="colDefs"
      (gridReady)="onGridReady($event)"
    >
    </ag-grid-angular>
  </div>
`,
})
export class BigTableComponent {

  rowData: IRow[] = [];

  colDefs: ColDef[] = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
    { field: "date" }
  ];

  constructor(private http: HttpClient) {}


  onGridReady(params: GridReadyEvent) {
    console.log('here');
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .subscribe(data => this.rowData = data);
      console.log(this.rowData);
      
      
  }

}
