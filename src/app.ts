import { RestServer } from './http/server'; 

export class Application{
    private container

    constructor(container){
        this.container = container
    }

    start(){
        const server = new RestServer(this.container)
        server.start()
    }
}