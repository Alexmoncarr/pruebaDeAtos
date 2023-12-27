import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditCard } from '../models/credit-card';
import { CreditcardsService } from '../services/creditcards.service';


@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.css']
})
export class CreditcardsComponent {

  creditCards: CreditCard[] = [];
  dataSource = new MatTableDataSource(this.creditCards);

  constructor(private creditCardService: CreditcardsService) { 
    this.creditCardService.getCreditCards().subscribe((data:CreditCard[])=>{
      this.creditCards = data;
      this.dataSource = new MatTableDataSource(this.creditCards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  

  displayedColumns: string[] = ['select','id', 'name', 'bankName', 'description', 'cardNumber', 'active', 'cvv', 'actions'];

  selection = new SelectionModel (true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }
} 
