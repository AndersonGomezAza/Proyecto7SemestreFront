import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {
tituloInmueble = "INMUEBLE"

constructor(public apiService: ApiService) {}

ngOnInit(): void {
  this.apiService.Get("Inmuebles");
}
}
