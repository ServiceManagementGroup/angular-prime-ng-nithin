import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }

  private productList$ = new BehaviorSubject<any>([]);
  elements$ = this.productList$.asObservable();

  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private sideBarState$ = new BehaviorSubject<boolean>(false);
  sideBarOpen$ = this.sideBarState$.asObservable();

  setProductList(elements: any) {
    this.productList$.next(elements);
  }

  getProducts() {
    return this.productList$;
  }

  getCartItems() {
    return this.totalItems.asObservable();
  }

  updateCartItems(items: number) {
    this.totalItems.next(items);
  }

  toggleSideBarState(state?:boolean){
    this.sideBarState$.next(state == undefined ? !this.sideBarState$.value : state);
  }

  getSideBarState(){
    return this.sideBarOpen$;
  }
}
