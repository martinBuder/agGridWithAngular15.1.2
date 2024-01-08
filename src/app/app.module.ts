import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { BigTableComponent } from './big-table/big-table.component';
import { CompanyLogoRenderComponent } from './company-logo-render/company-logo-render.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BigTableComponent,
    CompanyLogoRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
