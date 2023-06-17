import { NavigationItem } from 'src/app/components/navigation/navigation.types';
import { Dictionary } from '../dictionary/data';


export const NavigationItems: NavigationItem[] = [
  {
    id: 'newshop',
    title: 'NewShop',
    type: 'group',
    children: [
      {
        id: 'newshop.home',
        title: 'Início',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home'
      }
    ]

  }
]
