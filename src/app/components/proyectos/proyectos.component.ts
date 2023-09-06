import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos = "Estos son los proyectos";

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Get("Proyectos");
  }
}


