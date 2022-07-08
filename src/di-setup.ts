import {
    createContainer,
    asValue,
    asClass,
    asFunction,
    InjectionMode,
    Lifetime,
  } from "awilix";
//import { Server } from "./interfaces/http/routes/index";
  
  const container = createContainer({
    injectionMode: InjectionMode.PROXY,
  });
  
  container.register({
    // Infrastructure layer
    //connectDB: asFunction(connectDB),
    //server: asClass(Server),
  });
  
  //load repositories
  container.loadModules(
    [
      [
        "infra/repositories/*.js",
        {
          lifetime: Lifetime.SCOPED,
          register: asClass,
        },
      ],
    ],
    {
      // we want `TodoRepository` to be registered as `todoRepository`.
      formatName: "camelCase",
      resolverOptions: {},
      cwd: __dirname,
    }
  );
  
  // load all usecases
  container.loadModules(
    [
      [
        "usecases/*.js",
        {
          lifetime: Lifetime.SCOPED,
          register: asClass,
        },
      ],
    ],
    {
      // we want `GetATodo` to be registered as `getATodo`.
      formatName: "camelCase",
      resolverOptions: {},
      cwd: __dirname,
    }
  );
  
  export default container;
  