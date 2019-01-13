import {BaseServiceExampleUseCase} from './baseServiceExampleUseCase';

export class UserServiceExampleUseCase extends BaseServiceExampleUseCase {
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
