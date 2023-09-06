import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.component.html',
  styleUrls: ['./arriendo.component.css']
})
export class ArriendoComponent implements OnInit{
tituloArriendo="Arriendo"

constructor(public apiService: ApiService) {}

ngOnInit(): void {
  this.apiService.Get("ContratoArriendoes");
}
}
