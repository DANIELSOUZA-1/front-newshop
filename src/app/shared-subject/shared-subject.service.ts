import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedSubjectService {
  SharingData: Subject<any> = new Subject<any>();
  NavBarModule: Subject<any> = new Subject<any>();
  NavDrawerModule: Subject<any> = new Subject<any>();
  constructor() { }
}
