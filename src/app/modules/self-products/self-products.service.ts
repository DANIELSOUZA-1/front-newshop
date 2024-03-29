import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cloneDeep } from "lodash-es";
import { BehaviorSubject, lastValueFrom, Observable, of, throwError } from 'rxjs';
import { AppService } from "src/app/app.service";



@Injectable({
  providedIn: 'root'
})
export class SelfProductsService {

  url = this._appService.getUrlAPI

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _appService: AppService) {
  }

  async create(body: any) {

    const urlAPI = `${this.url}/produto`

    const response: any = await lastValueFrom(this._httpClient.post(urlAPI, body))

    const newData = {
      id: response.id,
      ...body
    }
    
    return newData
  }

  async save(body: any, id: string): Promise<any> {
    if (id) {
      return await this.patch(body, id)
    } else {
      return await this.create(body)
    }
  }

  async patch(body: any, id: any) {

    // Clone to prevent accidental reference based updates
    const updatedData = cloneDeep(body) as any;

    const urlAPI = `${this.url}/produto/${id}`

    await lastValueFrom(this._httpClient.patch(urlAPI, body))

    updatedData.id = id;

    // Return the updated
    return updatedData;

  }

  async get(id: any) {

    const urlAPI = `${this.url}/produto/${id}`

    let data = await lastValueFrom(this._httpClient.get(urlAPI))

    // Return the data
    return data;

  }

  async getAll() {
    debugger

    const urlAPI = `${this.url}/produto`

    let data = await lastValueFrom(this._httpClient.get(urlAPI))

    // Return the data
    return data;

  }

  async delete(id: any): Promise<Object> {

    const urlAPI = `${this.url}/produto/${id}`

    let data = await lastValueFrom(this._httpClient.delete(urlAPI))

    // Return the data
    return data;
  }

}
