import { Component } from '@angular/core';
import { InfoTraining } from 'src/app/shared/card-training.model';

@Component({
  selector: 'app-body-training',
  templateUrl: './body-training.component.html',
  styleUrls: ['./body-training.component.scss']
})
export class BodyTrainingComponent {
  InfoTraining: InfoTraining [] = [
    new InfoTraining("1", "../../../assets/MAPS.svg", "06/09/2023", "19:00", "Marília", "Venham"),
    new InfoTraining("2", "../../../assets/MAPS.svg", "22/09/2023", "19:00", "Marília", "Venham conhecer seus perfis"),
    new InfoTraining("3", "../../../assets/MAPS.svg", "02/07/2023", "20:00", "Marília", "mdoaomdmao"),
    new InfoTraining("4", "../../../assets/MAPS.svg", "02/07/2023", "20:00", "Marília", "mdoaomdmao"),
    new InfoTraining("5", "../../../assets/MAPS.svg", "02/07/2023", "20:00", "Marília", "mdoaomdmao"),
  ]
}
