import { IsActiveMatchOptions, Params, QueryParamsHandling } from '@angular/router';


export interface NavigationItem
{
  id?: string;
  title?: string;
  subtitle?: string;
  hidden?: (item: NavigationItem) => boolean;
  active?: boolean;
  disabled?: boolean;
  link?: string;
  queryParams?: Params | null;
  queryParamsHandling?: QueryParamsHandling | null;
  externalLink?: boolean;
  target?:
        | '_blank'
        | '_self'
        | '_parent'
        | '_top'
        | string;
  isActivateMatchOptions?: IsActiveMatchOptions;
  function?: (item: NavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: NavigationItem[];
    meta?: any;
    type:
        | 'aside'
        | 'basic'
        | 'collapsable'
        | 'divider'
        | 'group'
        | 'spacer';
}
