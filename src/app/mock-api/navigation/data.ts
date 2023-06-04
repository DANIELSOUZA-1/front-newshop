import { NavigationItem } from 'src/app/components/navigation/navigation.types';
import { Dictionary } from '../dictionary/data';


export const navigation: NavigationItem[] = [
  {

    id: 'newshop',
    title: 'NewShop',
    type: 'group',
    children: [
      {
        id: 'newshop.home',
        title: 'Home',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home'
      }
    ]

  }
]
