import {ServiceExampleUseCase} from './serviceExampleUseCase';

export class UserServiceExampleUseCase extends ServiceExampleUseCase {
    public async getItem(input: any): Promise<any> {
        return {
            id: "id",
            name: "name"
        }
    }

    public async createItem(input: any): Promise<any> {
        return "User created successfully"
    }

}
