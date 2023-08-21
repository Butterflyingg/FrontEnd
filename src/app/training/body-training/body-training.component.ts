import { Component } from '@angular/core';
import { InfoTraining } from 'src/app/shared/card-training.model';

@Component({
  selector: 'app-body-training',
  templateUrl: './body-training.component.html',
  styleUrls: ['./body-training.component.scss']
})
export class BodyTrainingComponent {
  InfoTraining: InfoTraining [] = [
    new InfoTraining("1", "../../../assets/MAPS.svg", "02/07/2023", "20:00", "Marília", "mdoaomdmao")
  ]
}
