import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { SubmitService } from "../../services/submit.service";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  private send = inject(SubmitService);
  show = false;
  name = "Garcia";
  listItems = ["teste1", "teste2", "teste3"];
  @Input("name") minhaPropDeForm!: string;
  @Output() emitindoValorName = new EventEmitter<string>();

  submit(event: any) {
    this.emitindoValorName.emit(this.name);
    // this.send.send("enviando a info");
  }
}
