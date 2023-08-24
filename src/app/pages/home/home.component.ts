import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  section: string = "default"

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const sectionParam = params.get('section');
      if (sectionParam === 'sobre') {
        this.section = 'sobre';
      } else if (sectionParam === 'contato') {
        this.section = 'contato';
      } else {
        this.section = 'default';
      }
    });
  }

}
