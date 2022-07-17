import 'dotenv/config'
import { Container } from 'inversify'
import { RestServer } from './http/server';


// set up container
let container = new Container({ autoBindInjectable: true });

const server = new RestServer(container)
server.start()


