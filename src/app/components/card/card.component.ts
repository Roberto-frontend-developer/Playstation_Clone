import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gamerCover:string=""
	@Input()
	gamerLabel:string =""
	@Input()
	gamerType:string =""
	@Input()
	gamerPrice:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
