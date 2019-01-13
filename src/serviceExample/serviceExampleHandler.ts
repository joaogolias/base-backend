import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import {Utils} from '../utils';
import {ServiceExampleRoutes} from './routes';
import {UserServiceExampleUseCase} from "./core/userServiceExampleUseCase";
import {PostServiceExampleUseCase} from "./core/postServiceExampleUseCase";

const ServiceExampleUseCases = {
    userService: UserServiceExampleUseCase,
    postService: PostServiceExampleUseCase
}

export const handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    return Utils.BaseHandler(
        event,
        context,
        callback,
        ServiceExampleUseCases,
        ServiceExampleRoutes)
}
