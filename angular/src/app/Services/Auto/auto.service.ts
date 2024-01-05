import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private session: { [key: string]: any } = {};

  setSessionItem(key: string, value: any) {
    this.session[key] = value;
  }

  getSessionItem(key: string): any {
    return this.session[key];
  }

  clearSession() {
    this.session = {};
  }
}
