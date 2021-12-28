import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { NoteInfo } from "../models"
import { getApi, route } from "../utilities"

@Injectable()
export class GetService {

    constructor(private http: HttpClient) { }

    notesByType(type: string) {
        return this.http.get<NoteInfo[]>(getApi(`${route.note}/type/${type}`)).toPromise()
    }
}