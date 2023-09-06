import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-arreglos-locativos',
  templateUrl: './arreglos-locativos.component.html',
  styleUrls: ['./arreglos-locativos.component.css']
})
export class ArreglosLocativosComponent implements OnInit {
  tituloLocativos="Arreglos Locativos"

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Get("ArregloLocativos");
  }

}
