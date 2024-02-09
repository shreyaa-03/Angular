import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service'


@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrl: './filter-pipe.component.css'
})
export class FilterPipeComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  filteredString:string ="";
 
  users = [
    {
    name: 'Shreya',
    salary : '23000'
  },
    {
    name: 'Rea',
    salary : '23000'
  },
    {
    name: 'Nitin',
    salary : '23000'
  },
    {
    name: 'Aiman',
    salary : '23000'
  },
]
}
