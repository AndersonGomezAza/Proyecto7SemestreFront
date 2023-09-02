import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-propietarios-read',
  templateUrl: './propietarios-read.component.html',
  styleUrls: ['./propietarios-read.component.css']
})
export class PropietariosReadComponent implements OnInit {
  propietarios = "Propietarios"

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Get("Propietarios");
  }
}
