import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from "@angular/common";
import { Component, EventEmitter } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Page } from "../../objects/page-view.objects";

@Component({
  selector: 'nav-bar-component',
  inputs: ['paginas'],
  outputs: ['adicionarPagina', 'deletarPagina', 'focarPagina'],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    ScrollingModule
  ],
})
export class NavBar {
  paginas: Page[] = [];
  adicionarPagina: EventEmitter<void> = new EventEmitter();
  deletarPagina: EventEmitter<string> = new EventEmitter();
  focarPagina: EventEmitter<string> = new EventEmitter();
}