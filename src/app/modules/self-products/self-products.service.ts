import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cloneDeep } from "lodash-es";
import { BehaviorSubject, lastValueFrom, Observable, of, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SelfProductsService {

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {
  }

  async create(body: any) {

    const urlAPI = `${'http://localhost:3000'}/produto`

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

    const urlAPI = `${'http://localhost:3000'}/products/${id}`

    await lastValueFrom(this._httpClient.patch(urlAPI, body))

    updatedData.id = id;

    // Return the updated
    return updatedData;

  }


}
