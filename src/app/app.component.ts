import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageView } from "./components/page-view/page-view.component";
import { NavBar } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageView, NavBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QuickPages';
}
