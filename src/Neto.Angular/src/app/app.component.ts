import { Component, OnInit } from "@angular/core"

import { AppService } from "./app.service"
import { NoteInfo } from "./models"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  blocked = false
  display = false
  keyword = ""
  ngModelOptions = { standalone: true }
  note = new NoteInfo()
  notes: NoteInfo[] = []
  type = "map"

  constructor(private service: AppService) { }

  add() {
    this.note = new NoteInfo()
    this.setDisplay(true)
  }

  edit(e: NoteInfo) {
    let { ...note } = e
    this.note = note
    this.setDisplay(true)
  }

  error(err) {
    if (err.error && err.error.message) {
      alert(err.error.message)
    } else {
      alert(err.message)
    }
    console.error(err)
    this.setLoading(false)
  }

  async initNotes() {
    try {
      this.notes = await this.service.get.notesByType("map")
    } catch (err) {
      this.error(err)
    }
  }

  async ngOnInit() {
    this.setLoading(true)
    await this.initNotes()
    this.setLoading(false)
  }

  async save() {
    try {
      this.setLoading(true)
      let id = this.note.id
      this.note.type = this.type
      if (id) {
        let rs = await this.service.put.note(this.note)
        let note = this.notes.find(x => x.id == id)
        Object.keys(rs).forEach(x => {
          note[x] = rs[x]
        })
      } else {
        let rs = await this.service.post.note(this.note)
        this.notes = [rs, ...this.notes]
      }
      this.setDisplay(false)
      this.setLoading(false)
    } catch (err) {
      this.error(err)
    }
  }

  setDisplay(e: boolean) {
    this.display = e
  }

  setLoading(e: boolean) {
    this.blocked = e
  }
}
