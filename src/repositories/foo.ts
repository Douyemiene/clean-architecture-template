
import { injectable } from 'inversify';

export interface IFooRepo {
    getFoo(): string
    //save(Foo: IFooProps): Promise<string>;
    // getFooById(id: string): Promise<IFoo | null>;
    // getFoo(Footatus: Status, deliveryStatus: DeliveryStatus): Promise<IFoo[] | null>
}

@injectable()
    export class FooRepository implements IFooRepo {
    //private foo: Model<IFoo>;
    getFoo(){
        return 'one of the foos'
    }
}