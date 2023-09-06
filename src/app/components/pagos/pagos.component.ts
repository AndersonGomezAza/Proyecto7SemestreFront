import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  pagos = "Estos son los pagos";

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Get("Arrendatarios");
  }
}


