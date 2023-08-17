import { Component, Input } from '@angular/core';
import { InfoPass } from 'src/app/shared/card-pass.model';

@Component({
  selector: 'app-card-pass',
  templateUrl: './card-pass.component.html',
  styleUrls: ['./card-pass.component.scss']
})
export class CardPassComponent {
  @Input() itens!: InfoPass
}
