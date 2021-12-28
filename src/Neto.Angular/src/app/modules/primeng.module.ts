import { NgModule } from "@angular/core"
import { BlockUIModule } from "primeng/blockui"
import { ButtonModule } from "primeng/button"
import { CardModule } from "primeng/card"
import { DialogModule } from "primeng/dialog"
import { DividerModule } from "primeng/divider"
import { InputTextModule } from "primeng/inputtext"
import { InputTextareaModule } from "primeng/inputtextarea"
import { ProgressSpinnerModule } from "primeng/progressspinner"
import { TabViewModule } from "primeng/tabview"
import { TableModule } from "primeng/table"

@NgModule({
  exports: [
    BlockUIModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    TabViewModule,
    TableModule,
  ]
})
export class PrimeNGModule { }
