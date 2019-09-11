import { Injectable } from '@angular/core';

const storageName = 'formdata';

const defaultList = { firsName: 'default firsName' , lastName: 'default lastName', age: 99 }

@Injectable()
export class localStorageService {

  private formsdata;

  constructor() {
    this.formsdata = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  get() {
    return this.formsdata;
  }

  push(data) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }

}
