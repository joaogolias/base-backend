import { Routes } from './models';
import {APIGatewayEvent, Callback, Context} from 'aws-lambda';

export namespace Utils {
    export function validatePath(paths: {}, key: string): string {
        if (!(key in paths)) {
            throw new Error(`path ${key} does not exist`)
        }
        return key;
    }

    export function validateHttpRequest(routes: Routes<any>, path: string, method: string) {
        const keys = Object.keys(routes)
        const value = keys.find((k) => routes[k].path === path && routes[k].method === method)
        if (!value) {
            throw new Error(`path ${path} does not exist`)
        }
        return routes[value];
    }

    export const BaseHandler = async (
        event: APIGatewayEvent,
        context: Context,
        callback: Callback,
        useCases: {[index: string]: any},
        routes: Routes<any>) => {
        try {
            const company = event.pathParameters && event.pathParameters['service']
            const functionType = event.pathParameters && event.pathParameters['functionType']
            const input = {
                ...event.queryStringParameters,
                ...JSON.parse(event.body || '{}'),
            }
            const route = validateHttpRequest(routes, functionType, event.httpMethod)
            const companyName = validatePath(useCases, company)
            const result = await (new useCases[companyName]())[route.functionName](input)
            callback(null, formatResponse({ result }))
        } catch (err) {
            callback(null, formatResponse({ err: err.message }))
        }
    }

    const CORS_HEADERS = {
        'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials' : true, // Required for cookies, authorization headers with HTTPS
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    }

    export function formatResponse(response: {}): {} {
        const formatedResponse = {
            body: JSON.stringify(response),
            headers: CORS_HEADERS,
        }
        return formatedResponse
    }
}
