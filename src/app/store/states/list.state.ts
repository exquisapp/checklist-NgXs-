
import { State, Action, Selector, StateContext } from '@ngxs/store';

import { LStorageService } from './../../services/lstorage.service';

import * as ListActions from '../actions';

export interface ListModel {
    id: string;
    content: string;
}

export interface AllListModel {
    title: string;
    list: ListModel[];
}
export interface ListStateModel {
    allList: AllListModel[];
}
@State<ListStateModel>({
    name: 'checkList',
    defaults: {
        allList: []
    }
})
export class ListState{
    constructor(private storageService: LStorageService){}

    @Action(ListActions.AddList)
    addList({getState, patchState} : StateContext<ListStateModel>, {payload}: ListActions.AddList){

        this.storageService.addItem(payload);

        patchState({
            allList : [...getState().allList, payload]
        })
    }

    @Selector()
    static list(state){
        return {
            list: ['cool', 'not cool']
        }
    }
}