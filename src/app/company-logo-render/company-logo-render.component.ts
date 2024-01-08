import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-company-logo-render',
  templateUrl: './company-logo-render.component.html',
  styleUrls: ['./company-logo-render.component.scss']
})

export class CompanyLogoRenderComponent implements ICellRendererAngularComp {

  public value!: string;
  
  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  // Return Cell Value
  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }
  
}
