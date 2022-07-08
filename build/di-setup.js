"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
//import { Server } from "./interfaces/http/routes/index";
const container = (0, awilix_1.createContainer)({
    injectionMode: awilix_1.InjectionMode.PROXY,
});
container.register({
// Infrastructure layer
//connectDB: asFunction(connectDB),
//server: asClass(Server),
});
//load repositories
container.loadModules([
    [
        "infra/repositories/*.js",
        {
            lifetime: awilix_1.Lifetime.SCOPED,
            register: awilix_1.asClass,
        },
    ],
], {
    // we want `TodoRepository` to be registered as `todoRepository`.
    formatName: "camelCase",
    resolverOptions: {},
    cwd: __dirname,
});
// load all usecases
container.loadModules([
    [
        "usecases/*.js",
        {
            lifetime: awilix_1.Lifetime.SCOPED,
            register: awilix_1.asClass,
        },
    ],
], {
    // we want `GetATodo` to be registered as `getATodo`.
    formatName: "camelCase",
    resolverOptions: {},
    cwd: __dirname,
});
exports.default = container;
