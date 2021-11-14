import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EstudiantesResponse } from 'src/app/models/estudiantes.interface';
import { EstudiantesService } from 'src/app/services/estudiantes.services';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  myImgUrl: string = './assets/images/awards/hogwarts.png';
  estudiantes: any = [];
  displayedColumns: string[] = ['name', 'house', 'dateOfBirth', 'patronus','image'];
  dataSource = new MatTableDataSource<EstudiantesResponse>(this.estudiantes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  constructor(private estudiantesServices: EstudiantesService) { }

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
    this.estudiantesServices.getEstudiantes().subscribe(data => {
          this.estudiantes = data;
          this.dataSource = new MatTableDataSource<EstudiantesResponse>(this.estudiantes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
    });
  }

}
