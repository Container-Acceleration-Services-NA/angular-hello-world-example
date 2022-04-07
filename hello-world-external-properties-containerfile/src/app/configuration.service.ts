import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  configUrl = `assets/config/config.json`;
  private configSettings: any = null;

  get settings() {
    return this.configSettings;
  }

  public load(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(this.configUrl).subscribe((response: any) => {
            this.configSettings = response;
            resolve(true);
      });
    });
  }
  
}