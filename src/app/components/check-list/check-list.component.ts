import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { Observable } from 'rxjs';
import * as ListActions from './../../store/actions';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  // @Select()
  // list: Observable<any>;
  public list;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new ListActions.AddList("any"));
    this.store.select(state => state.checkList).subscribe(data => {
      this.list = data;
      console.log(this.list);
    })
  }

}
