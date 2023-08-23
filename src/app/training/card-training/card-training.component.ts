import { Component, Input } from '@angular/core';
import { InfoTraining } from 'src/app/shared/card-training.model';

@Component({
  selector: 'app-card-training',
  templateUrl: './card-training.component.html',
  styleUrls: ['./card-training.component.scss']
})
export class CardTrainingComponent {
  @Input() itens!: InfoTraining
}
