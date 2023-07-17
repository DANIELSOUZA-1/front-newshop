import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cloneDeep } from "lodash-es";
import { BehaviorSubject, lastValueFrom, Observable, of, throwError } from 'rxjs';
import { AppService } from "src/app/app.service";



@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  apiURL = this._appService.getUrlAPI

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _appService: AppService) {
  }

  async create(body: any) {
    debugger

    const urlAPI = `${this.apiURL}/pedido`

    const response: any = await lastValueFrom(this._httpClient.post(urlAPI, body))

    const newData = {
      id: response.id,
      ...body
    }
    
    return newData
  }

  async save(body: any): Promise<any> {
    return await this.create(body)
  }


  async get(id: any) {

    const urlAPI = `${this.apiURL}/pedido/${id}`

    let data = await lastValueFrom(this._httpClient.get(urlAPI))

    // Return the data
    return data;

  }

  async getAll() {
    debugger

    const urlAPI = `${this.apiURL}/pedido`

    let data = await lastValueFrom(this._httpClient.get(urlAPI))

    // Return the data
    return data;

  }


}
