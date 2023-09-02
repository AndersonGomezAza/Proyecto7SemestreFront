import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-arrendatarios-read',
  templateUrl: './arrendatarios-read.component.html',
  styleUrls: ['./arrendatarios-read.component.css']
})
export class ArrendatariosReadComponent implements OnInit {
  arrendatarios = " Arrendatarios "

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Get("Arrendatarios");
  }
}
