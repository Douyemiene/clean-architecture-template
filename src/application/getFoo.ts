
import { injectable } from 'inversify';
import { FooRepository } from '../repositories/foo';

@injectable()
export class GetFoo {
    constructor(private fooRepository: FooRepository) { }

    execute() {
        const a_foo = this.fooRepository.getFoo()
        return a_foo
    }
}