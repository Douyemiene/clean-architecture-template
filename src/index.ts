import 'dotenv/config'
import 'reflect-metadata'
import * as bodyParser from 'body-parser';
import { Container } from 'inversify'
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import "./interface/http/controllers/foo";


// set up container
let container = new Container({ autoBindInjectable: true });

// set up bindings
//container.bind<FooService>('FooService').to(FooService);

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});


const app = server.build()

const PORT = process.env.PORT || 30001
app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`))




