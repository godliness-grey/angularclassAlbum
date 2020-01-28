import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = `Tosin-Omotayo`;
  show = `ball-show`;
  academy = [
    { name: "tosin", image: "kizi1.jpg",complexion: "black", hobbies: ["dance", "talk"] },
    { name: "lola", image: "kizi2.jpg",complexion: "yellow", hobbies: ["swim", "wyne"] },
    { name: "wale", image: "kizi3.jpg",complexion: "fair", hobbies: ["code", "code"] },
    { name: "charlse", image: "kizi4.jpg",complexion: "black", hobbies: ["drive", "talk"] }
  ];
}
