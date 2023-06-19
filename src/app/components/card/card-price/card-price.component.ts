import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

	@Input()
	gamerType:string ="Digital PS4"
	gamerPrice:string ="R$ 399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
