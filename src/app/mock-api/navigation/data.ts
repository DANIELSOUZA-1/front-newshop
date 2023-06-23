import { NavigationItem } from 'src/app/components/navigation/navigation.types';
import { Dictionary } from '../dictionary/data';


export const NavigationItems: NavigationItem[] = [
  {
    id: 'newshop',
    title: 'NewShop',
    type: 'group',
    active: false,
    children: [
      {
        id: 'newshop.home',
        title: 'Início',
        active: false,
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home'
      },
      {
        id: 'newshop.carrinho',
        title: 'Meus produtos',
        active: false,
        type: 'basic',
        icon: 'heroicons_outline:cart',
        link: '/self-products/list'
      },
    ]
  }
]
