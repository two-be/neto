import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { NoteInfo } from "../models"
import { getApi, route } from "../utilities"

@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

    note(body: NoteInfo) {
        return this.http.post<NoteInfo>(getApi(route.note), body).toPromise()
    }
}