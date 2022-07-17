import 'dotenv/config'
import container from './container';
import { Application } from './app';


const app = new Application(container)
//start the server
app.start()





