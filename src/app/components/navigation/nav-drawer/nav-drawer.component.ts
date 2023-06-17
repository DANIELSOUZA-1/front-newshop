import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { appRoutes } from 'src/app/app.routing'
import { Router, Route, NavigationEnd, ResolveEnd } from "@angular/router";
import { NavigationItems } from 'src/app/mock-api/navigation/data'
import { filter } from 'rxjs';


@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})

export class NavDrawerComponent {
  routes: String[] = []
  navItems = NavigationItems
  currentUrl = ''

  
  constructor(private _router: Router, private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log(this.navItems)
  }
  
  ngAfterViewInit() {
    this.getCurrentRouter()
  }

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

  redirect(link: any) {
    this._router.navigateByUrl(link);
    this.getCurrentRouter()
  }

  focusRouterOnSideNav(currentPage: string) {
    let pages = this.navItems[0].children
    pages?.map(page => page.active = false)
    let activePage = pages?.find(page => page.link == currentPage)
    if (activePage) {  activePage.active = true }
    console.log(currentPage)
  }

  getCurrentRouter() {
    this._router.events.subscribe(routerData => {
      if(routerData instanceof ResolveEnd){ 
        this.focusRouterOnSideNav(routerData.url)
      } 
    })
  }

}
