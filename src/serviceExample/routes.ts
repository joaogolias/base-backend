import {Route} from '../models';
import {BaseServiceExampleUseCase} from './core/baseServiceExampleUseCase';

export const ServiceExampleRoutes: { [index: string]: Route<BaseServiceExampleUseCase> }  = {
    GetItem: {
        path: 'get-item',
        method: 'GET',
        functionName: 'getItem',
    },
    CreateItem: {
        path: 'create-item',
        method: 'POST',
        functionName: 'createItem',
    },
}
