import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crear-estudiantes',
  templateUrl: './crear-estudiantes.component.html',
  styleUrls: ['./crear-estudiantes.component.css']
})
export class CrearEstudiantesComponent implements OnInit {
  selectedValue: string | undefined;
  houses = [
    { value: 'Gryffindor', viewValue: 'Gryffindor' },
    { value: 'Slytherin', viewValue: 'Slytherin' },
    { value: 'Ravenclaw', viewValue: 'Ravenclaw' },
    { value: 'Hufflepuff', viewValue: 'Hufflepuff' },
  ];
  public estudiantes: any = []
  displayedColumns: string[] = ['name', 'patronus','age', 'house'];
  dataSource = new MatTableDataSource<any>(this.estudiantes);
  @ViewChild(MatPaginator) paginator!: MatPaginator; ;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
estudianteForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    patronus: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    house : new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.contactForm.valid){
      this.estudiantes.push(this.contactForm.value)
      this.dataSource = new MatTableDataSource<any>(this.estudiantes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.estudianteForm.reset();
    }
  }
   

}
