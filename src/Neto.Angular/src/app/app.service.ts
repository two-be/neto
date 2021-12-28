import { Injectable } from "@angular/core"
import { DeleteService, GetService, PostService, PutService } from "./services"

@Injectable()
export class AppService {

    delete: DeleteService

    constructor(private del: DeleteService, public get: GetService, public post: PostService, public put: PutService) {
        this.delete = this.del
    }
}