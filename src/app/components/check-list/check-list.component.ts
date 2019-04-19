import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { Observable } from 'rxjs';
import * as ListActions from './../../store/actions';
import { AddList } from './../../store/actions';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  //refactor to selector concept later
  public list;
  public showAddList = false;
  public temp_list = [];
  public currentTitle;
  public currentContent;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(state => state.checkList).subscribe(data => {
      this.list = data;
      console.log(this.list);
    })
  }

  _showAddList(){
    this.showAddList = true;
  }
  _hideAll(){
    this.showAddList = false;
  }
  pushContent(){
    if (this.currentTitle && this.currentContent){
      this.temp_list.push({ content: this.currentContent, id: this.currentContent.replace(/\s/g,'')});
      this.currentContent = '';
    }
    
  }
  removeContent(id){
    id = id.replace(/\s/g,'');
    this.temp_list =  this.temp_list.filter(list => list.id !== id);
  }

  addTempList(){
    this.store.dispatch(new AddList({ title: this.currentTitle, list: this.temp_list}));
  }
}
