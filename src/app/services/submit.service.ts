import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SubmitService {
  constructor() {}

  send(info: string) {
    console.log(info);
  }
}
