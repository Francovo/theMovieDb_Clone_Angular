import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  @Input() dataCard: any;
  urlBaseImage: string = environment.urlBaseImage;

  ngOnInit(): void {
    console.log('CLG CARD', this.dataCard);
  }
}
