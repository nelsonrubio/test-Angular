import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProfesoresResponse } from 'src/app/models/profesores.interface';
import { ProfesoresService } from 'src/app/services/profesores.services';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  myImgUrl: string = './assets/images/awards/hogwarts.png';
  profesores: any = [];
  displayedColumns: string[] = ['name', 'house', 'dateOfBirth', 'patronus','image'];
  dataSource = new MatTableDataSource<ProfesoresResponse>(this.profesores);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private profesoresServices: ProfesoresService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  filtro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.profesoresServices.getProfesores().subscribe(data => {
          this.profesores = data;
          this.dataSource = new MatTableDataSource<ProfesoresResponse>(this.profesores);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
    });
  }

}
