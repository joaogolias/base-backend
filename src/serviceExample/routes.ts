import {Route} from '../models';
import {ServiceExampleUseCase} from './core/serviceExampleUseCase';

export const ServiceExampleRoutes: { [index: string]: Route<ServiceExampleUseCase> }  = {
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
