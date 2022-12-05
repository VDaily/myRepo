import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private Test?: any;
  private Hi?: any
  constructor() { }

  ngOnInit(): void {
  }
  onClickAnother123432(): void {
    console.log(123);
  }

}
