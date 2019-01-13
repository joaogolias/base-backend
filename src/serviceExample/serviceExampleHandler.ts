import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import {Utils} from '../utils';
import {ServiceExampleRoutes} from './routes';
import {UserServiceExampleUseCase} from "./core/userServiceExampleUseCase";

const ServiceExampleUseCases = {
    userService: UserServiceExampleUseCase,
}

export const handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    return Utils.BaseHandler(
        event,
        context,
        callback,
        ServiceExampleUseCases,
        ServiceExampleRoutes)
}
