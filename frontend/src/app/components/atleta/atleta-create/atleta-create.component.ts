import { AtletaService } from './../atleta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atleta } from '../atleta.model';

@Component({
  selector: 'app-atleta-create',
  templateUrl: './atleta-create.component.html',
  styleUrls: ['./atleta-create.component.css']
})
export class AtletaCreateComponent implements OnInit {

  atleta: Atleta = {
    name: '',
    country: '',
    gender: '',
    modality: '',
    category: ''
  }

  constructor(
    private atletaService: AtletaService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  createAtleta(): void {
    this.atletaService.create(this.atleta).subscribe(() => {
      this.atletaService.showMessage('Atleta criado com sucesso!');
      this.router.navigate(['/atletas']);
    })
    
  }

  cancel(): void {
    this.router.navigate(['/atletas']);
  }

}
