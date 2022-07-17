
import 'dotenv/config'
import 'reflect-metadata'
import * as bodyParser from 'body-parser';
import { Container } from 'inversify'
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import '../http/controllers'

export class RestServer{
    private server
    
    constructor(container){
        // set up container
        //let { server } = this
        container = new Container({ autoBindInjectable: true });

        this.server = new InversifyExpressServer(container);

        this.server.setConfig((app) => {
            app.use(bodyParser.urlencoded({
                extended: true
            }));

            app.use(bodyParser.json());
        });
    }

    start(){
        
        const app = this.server.build()

        const { PORT } = process.env
        app.listen(PORT, () => {
            console.log(`running on http://localhost:${PORT}`)
            })
    }
}













