import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AppService } from "./app.service"
import { PrimeNGModule } from "./modules"
import { DeleteService, GetService, PostService, PutService } from "./services"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PrimeNGModule,
  ],
  providers: [
    AppService,
    DeleteService,
    GetService,
    PostService,
    PutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
