import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MyTableComponent } from "./my-table/my-table.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, MyTableComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
