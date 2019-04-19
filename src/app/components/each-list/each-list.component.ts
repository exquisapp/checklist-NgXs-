import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-list',
  templateUrl: './each-list.component.html',
  styleUrls: ['./each-list.component.scss']
})
export class EachListComponent implements OnInit {
  @Input()
  public title;

  @Input()
  public list;
  
  constructor() { }

  ngOnInit() {
  }

}
