import { Component } from '@angular/core';
import { InfoPass } from 'src/app/shared/card-pass.model';

@Component({
  selector: 'app-body-pass',
  templateUrl: './body-pass.component.html',
  styleUrls: ['./body-pass.component.scss']
})
export class BodyPassComponent {
 InfoCard: InfoPass[] = [
  new InfoPass('Pessoal','../../../assets/MAPS.svg'),
  new InfoPass('Empresa', '../../../assets/MAPS.svg')
 ]
}
