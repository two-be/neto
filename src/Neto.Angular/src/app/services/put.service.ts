import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { NoteInfo } from "../models"
import { getApi, route } from "../utilities"

@Injectable()
export class PutService {

    constructor(private http: HttpClient) { }

    note(body: NoteInfo) {
        return this.http.put<NoteInfo>(getApi(`${route}/${body.id}`), body).toPromise()
    }
}