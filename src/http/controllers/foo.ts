import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, next } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { FooRepository } from "../../repositories/foo";
import { GetFoo } from "../../application/getFoo";

@controller("/foo")
export class FooController implements interfaces.Controller {

    constructor(private getFoo: GetFoo) { }

    @httpGet("/")
    private index(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction): string {
        //return this.fooService.get(req.query.id);
        const result = this.getFoo.execute()
        return result
    }

    // @httpGet("/")
    // private list(@queryParam("start") start: number, @queryParam("count") count: number): string {
    //     return this.fooService.get(start, count);
    // }

    // @httpPost("/")
    // private async create(@request() req: express.Request, @response() res: express.Response) {
    //     try {
    //         await this.fooService.create(req.body);
    //         res.sendStatus(201);
    //     } catch (err) {
    //         res.status(400).json({ error: err.message });
    //     }
    // }

    // @httpDelete("/:id")
    // private delete(@requestParam("id") id: string, @response() res: express.Response): Promise<void> {
    //     return this.fooService.delete(id)
    //         .then(() => res.sendStatus(204))
    //         .catch((err: Error) => {
    //             res.status(400).json({ error: err.message });
    //         });
    // }
}
