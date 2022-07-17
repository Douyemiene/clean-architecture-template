import 'dotenv/config'
import container from './container';
import { RestServer } from './http/server';




const server = new RestServer(container)
server.start()


