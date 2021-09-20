import { AtletaService } from './../atleta.service';
import { Component, OnInit } from '@angular/core';
import { Atleta } from '../atleta.model';

@Component({
  selector: 'app-atleta-read',
  templateUrl: './atleta-read.component.html',
  styleUrls: ['./atleta-read.component.css']
})
export class AtletaReadComponent implements OnInit {

  atletas: Atleta[];
  displayedColumns = ['id', 'name', 'country', 'gender','modality', 'category', 'action'] 

  constructor(
    private atletaService: AtletaService
  ) { }

  ngOnInit(): void {
    this.atletaService.read().subscribe(atletas => {
      this.atletas = atletas;
      //console.log(atletas);
    })
  }

}
