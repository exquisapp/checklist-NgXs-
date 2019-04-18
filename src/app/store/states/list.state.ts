
import { State, Action, Selector, Select } from '@ngxs/store';

import * as ListActions from '../actions';

@State<any>({
    name: 'checkList',
    defaults: []
})
export class ListState{
    @Action(ListActions.AddList)
    addList(ctx){
        console.log(ctx);
    }

    @Selector()
    static list(state){
        console.log('state thing');
        return {
            list: ['cool', 'not cool']
        }
    }
}