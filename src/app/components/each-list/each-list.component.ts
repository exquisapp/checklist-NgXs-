import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-each-list',
  templateUrl: './each-list.component.html',
  styleUrls: ['./each-list.component.scss']
})
export class EachListComponent implements OnInit {
  @Input()
  public title;

  @Output()
  public eachListEvent = new EventEmitter();

  @Input()
  public list;

  constructor() { }

  ngOnInit() {
  }

  deleteList(){
    this.eachListEvent.emit({message : 'DELETE', payload: this.list, title: this.title})
  }

}
