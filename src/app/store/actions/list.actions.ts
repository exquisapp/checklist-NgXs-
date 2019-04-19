import * as ListAliases from './../states/list.state';

export class AddList{
    static readonly type = "[List] Add List";
    constructor(public payload: ListAliases.AllListModel){}
}