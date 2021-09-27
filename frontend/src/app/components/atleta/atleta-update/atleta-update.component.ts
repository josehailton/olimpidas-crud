import { AtletaService } from './../atleta.service';
import { Atleta } from './../atleta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-atleta-update',
  templateUrl: './atleta-update.component.html',
  styleUrls: ['./atleta-update.component.css']
})
export class AtletaUpdateComponent implements OnInit {

  atleta: Atleta;

  constructor(
    private atletaService: AtletaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.atletaService.readById(id).subscribe(atleta => {
      this.atleta = atleta;
    });
  }

  updateAtleta(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.atletaService.update(this.atleta).subscribe(() => {
      this.atletaService.showMessage('Atleta Atualizado com sucesso!');
      this.router.navigate(['/atletas']);
    });
  }

  cancel(): void {
    this.router.navigate(['/atletas']);
  }

}
