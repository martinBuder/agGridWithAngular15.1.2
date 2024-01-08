import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { CompanyLogoRenderComponent } from '../company-logo-render/company-logo-render.component';

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
      style="width: 90%; height: 550px; margin: 50px"
      class="ag-theme-balham"
      [rowData]="rowData"
      [columnDefs]="colDefs"
      (gridReady)="onGridReady($event)" 
      [pagination]="true"     
    >
    </ag-grid-angular>
  </div>
`,
})

// [pagination]="true" is for loading just a part of lines - we get a bottom line with pages settings for the table

export class BigTableComponent {

  rowData: IRow[] = [];

  // with filter we get a menu-icon. This we can open and then there is a search field. for this we have to hover this header field
  colDefs: ColDef[] = [
    { field: "mission", filter: true },
    { field: "company",
      cellRenderer: CompanyLogoRenderComponent // Render a custom component
   },
    { field: "location" },
    { field: "date",
      valueFormatter: params => { return params.value ? new Date(params.value).toUTCString() : '';},
    }, 
    { field: "price",
      valueFormatter: params => { return '£' + params.value.toLocaleString(); } },
    { field: "successful" },
    { field: "rocket" },
  ];

  //*1 with this code we would have the search function in each column
  // defaultColDef: ColDef = {
  //   filter: true
  // }
  // in ag-grid-angular we muss add:
  // [defaultColDef]="defaultColDef" 

  
  constructor(private http: HttpClient) {}


  onGridReady(params: GridReadyEvent) {
    console.log('here');
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .subscribe(data => this.rowData = data);
      console.log(this.rowData);
  }



}
