export class BaseServiceExampleUseCase {
    public getItem<Input, Output>(input: Input): Promise<Output> {
        throw new Error('Function not implemented')
    }
    public createItem<Input, Output>(input: Input): Promise<Output> {
        throw new Error('Function not implemented')
    }
}
