import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar.component";
import { PageView } from "./components/page-view/page-view.component";
import { Page } from './objects/page-view.objects';
import { StorageService } from './services/storageService.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageView, NavBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'QuickPages';
  paginas = new Array<Page>();
  localStorage: StorageService;

  constructor(storageService: StorageService) {
    this.localStorage = storageService;
  }

  ngOnInit() {
    this.carregarPaginas();
  }

  adicionarPagina() {
    this.paginas.unshift(new Page(`Nova página ${this.paginas.length + 1}`, "", new Date()));
    this.salvarPaginas();
  }

  deletarPagina(paginaId: string) {
    this.paginas = this.paginas.filter(pagina => pagina.id != paginaId);
    this.salvarPaginas();
  }

  carregarPaginas = () =>
    this.paginas = JSON.parse(this.localStorage.getItem("paginas") || "[]");

  salvarPaginas = () =>
    this.localStorage.setItem("paginas", JSON.stringify(this.paginas));
}
