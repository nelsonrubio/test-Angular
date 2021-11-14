import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonajesResponse } from '../models/personajes.interface';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  selectedValue: string | undefined;
  houses = [
    { value: 'Gryffindor', viewValue: 'Gryffindor' },
    { value: 'Slytherin', viewValue: 'Slytherin' },
    { value: 'Ravenclaw', viewValue: 'Ravenclaw' },
    { value: 'Hufflepuff', viewValue: 'Hufflepuff' },
  ];
  myImgUrl: string = './assets/images/awards/hogwarts.png';
  public personajes: any = []
  displayedColumns: string[] = ['name', 'house', 'dateOfBirth', 'patronus','image'];
  dataSource = new MatTableDataSource<PersonajesResponse>(this.personajes);
  @ViewChild(MatPaginator) paginator!: MatPaginator; ;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private personajeServices: PersonajesService) { }

  ngOnInit(): void {
  }

  change(event: any) {
    this.personajes = [];
    this.dataSource = new MatTableDataSource<PersonajesResponse>(this.personajes);
    this.personajeServices.getPersonajes(event.source.value).subscribe(data => {
      this.personajes = data;
          this.dataSource = new MatTableDataSource<PersonajesResponse>(this.personajes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
    });
  }

}
