import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LStorageService {

  constructor() { }

  addItem(list){
    console.log('got here')
    return localStorage.setItem('CheckList', list);
  }
}
