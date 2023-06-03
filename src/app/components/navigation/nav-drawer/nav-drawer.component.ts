import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent {

  categoryTrending: String[] = [
    "Mais vendidos",
    "Novidades",
    "Produtos em alta"
  ]

categoryList: String[] = [
    "Alimentos e Bebidas",
    "Automotivo",
    "Bebês",
    "Beleza e Cuidados Pessoais",
    "Bolsas, Malas e Mochilas",
    "Brinquedos e Jogos",
    "Casa, Jardim e Limpeza",
    "Celulares e Comunicação",
    "Computadores e Informática",
    "Cozinha",
    "Eletrônicos, TV e áudio",
    "Esportes, Aventura e Lazer",
    "Ferramentas e Construção",
    "Filmes, Séries e Música",
    "Games e Consoles",
    "Livros",
    "Papelaria e Escritório",
    "Pet Shop",
    "Roupas, Calçados e Acessórios"
  ]
}
