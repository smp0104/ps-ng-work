import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pro-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {


	@Input() rating: number =0;
	starWidth: number;
	@Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
	ngOnChanges(){
		this.starWidth = this.rating * 75/5;
	}
  constructor() { }

  ngOnInit() {
  }

  onClickRating():void{
  	this.ratingClicked.emit(`Value of the star ${this.rating}`)
  }

}
