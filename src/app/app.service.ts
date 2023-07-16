import { DatePipe, DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateTime } from 'luxon';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _decimalPipe: DecimalPipe,
    private _snackBar: MatSnackBar) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  get getUrlStorage() {
    return environment.STORAGE_URL;
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json'
    }
  }

  get getUrlAPI() {
    //return 'https://dant-financeiro.herokuapp.com/v1/'
    //return 'http://localhost:3000'
    //return 'https://lobster-app-v5jbb.ondigitalocean.app/v1/'
    return environment.API_URL
  }

  //#region UTIL

  getOnlyNumbers(value: any) {
    try {
      if (value && value.length > 0) {
        value = value.match(/\d/g).join("");
      }
    } catch (error) {
      console.log(`getOnlyNumbers, err: ${error}`)
    }

    return value;
  }

  /**
   * 
   * @param value 15.99
   * @returns 16
   */
  getDecimalValue(value: any): any {

    try {

      if (value) {
        value = this._decimalPipe.transform(value, "1.0-0")
      }

    } catch (error) {
      console.log(error)
    }

    return value;
  }

  /**
   * 
   * @param value 15.99999
   * @returns 15.99
   */
  getDecimalMaxTwoPlaces(value: number): number {

    if (!value || value == 0) return value

    try {

      //let lang = localStorage.getItem('lang').toLowerCase()
      //value = this._decimalPipe.transform(value, "1.0-2", lang)
      value = Math.round(value * 100) / 100

    } catch (error) {
      console.log(error)
    }

    return value;
  }

  /**
   * 
   * @param value 100.00
   * @returns R$ 100,00
   */
  getCurrencyValue(value: any): any {

    try {

      if (!value)
        value = 0;

      //if (value && value >= 0) {
      //let lang = localStorage.getItem('lang').toLowerCase()
      //value = this._decimalPipe.transform(value, "1.2-2", lang)
      value = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      //}

    } catch (error) {
      console.log(error)
    }

    return value;
  }

  parseStringToFloat(value: String | number): any {

    try {

      if (this.isEmpty(value.toString()))
        return value

      value = value.toString();

      // https://www.folkstalk.com/tech/convert-string-with-dot-or-comma-as-decimal-separator-to-number-in-javascript-with-code-examples/
      // strip everything except numbers, dots, commas and negative sign
      value = value.replace(/[^\d,.-]/g, '')


      value = parseFloat(value.replace(/\./gi, '').replace(/,/gi, '.'));

    } catch (error) {
      console.log(error)
    }

    return value;
  }


  /**
   * https://angular.io/api/common/DatePipe
   * @param value 
   * Date ISO: yyyy-MM-ddTHH:mm:ss
   * @param format 
   * 1. 'short': equivalent to 'M/d/yy, h:mm a' (6/15/15, 9:03 AM).
   * 2. 'medium': equivalent to 'MMM d, y, h:mm:ss a' (Jun 15, 2015, 9:03:01 AM).
   * 3. 'long': equivalent to 'MMMM d, y, h:mm:ss a z' (June 15, 2015 at 9:03:01 AM GMT+1).
   * 4. 'full': equivalent to 'EEEE, MMMM d, y, h:mm:ss a zzzz' (Monday, June 15, 2015 at 9:03:01 AM GMT+01:00).
   * 5. 'shortDate': equivalent to 'M/d/yy' (6/15/15).
   * 6. 'mediumDate': equivalent to 'MMM d, y' (Jun 15, 2015).
   * 7. 'longDate': equivalent to 'MMMM d, y' (June 15, 2015).
   * 8. 'fullDate': equivalent to 'EEEE, MMMM d, y' (Monday, June 15, 2015).
   * 9. 'shortTime': equivalent to 'h:mm a' (9:03 AM).
   * 10. 'mediumTime': equivalent to 'h:mm:ss a' (9:03:01 AM).
   * 11. 'longTime': equivalent to 'h:mm:ss a z' (9:03:01 AM GMT+1).
   * 12. 'fullTime': equivalent to 'h:mm:ss a zzzz' (9:03:01 AM GMT+01:00).
   * @returns 
   */
  convertDateIsoToString(value:any, format = 'shortDate'): any {

    try {

      if (value) {
        let lang:any = localStorage.getItem('lang')


        var datePipe = new DatePipe(lang) // Use your own locale
        value = datePipe.transform(value, format)
      }

    } catch (error) {
      console.log(error)
    }

    return value;
  }



  /**
   * Count number of fays between dates
   * ISO format 'YYYY-MM-DD'
   * @param dateStart Date start
   * @param dateEnd Date end
   * @returns Count days
   */
  getNumberOfDays(dateStart:any = null, dateEnd: any = null) {

    if (!dateStart) {
      dateStart = DateTime.now()
    } else {
      dateStart = DateTime.fromISO(dateStart)
    }

    if (!dateEnd) {
      dateEnd = DateTime.now()
    } else {
      dateEnd = DateTime.fromISO(dateEnd)
    }

    return parseInt(dateEnd.diff(dateStart, "days").days)
  }


  getCurrentDate(format: string = 'shortDate'): string {

    let ret = null
    // https://github.com/urish/ngx-moment/issues/158
    let today = new Date();

    ret = this.convertDateIsoToString(today, format)

    return ret
  }

  /**
   *  Remove double spaces, trim and accent
   * @param value 
   * @returns 
   */
  removeDoubleSpacesTrimAndAccent(value: any): any {

    try {

      if (value == null || value === '' || typeof value !== 'string') {
        if (value === '' || value == undefined)
          value = null
        return value
      }

      // Upper case
      value = value.trim().toUpperCase()
      // Remove double space 
      value = value.replace(/\s+/g, ' ')
      // Remove accent
      value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

      if (value === '' || value == undefined)
        value = null

    } catch (error) {
      console.log(`removeDoubleSpacesTrimAndAccent, err: ${error}`)
    }

    return value

  }

  /**
  *  Remove double spaces, trim and accent
  * @param value 
  * @returns 
  */
  removeAllSpacesAndAccent(value: any): any {

    try {

      if (value == null || value === '' || typeof value !== 'string') {
        if (value === '' || value == undefined)
          value = null
        return value
      }

      // Upper case
      value = value.trim().toUpperCase()
      // Remove double space 
      value = value.replace(/\s+/g, '')
      // Remove accent
      value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

      if (value === '' || value == undefined)
        value = null

    } catch (error) {
      console.log(`removeDoubleSpacesTrimAndAccent, err: ${error}`)
    }

    return value

  }

  isEmpty(value: String) {
    if (value == undefined || value == null || value === '' || typeof value !== 'string') {
      return true
    }

    return false
  }

  toUpperCase(value: any) {

    try {
      if (value && value.length > 0) {
        value = value.trim().toUpperCase()
      }
    } catch (error) {
      console.log(`toUpperCase, err: ${error}`)
    }

    return value;
  }

  toLowerCase(value: any) {

    try {
      if (value && value.length > 0) {
        value = value.trim().toLowerCase()
      }
    } catch (error) {
      console.log(`toLowerCase, err: ${error}`)
    }

    return value;
  }


  /**
   * Get the relative format of the given date
   *
   * @param date
   */
  getRelativeFormat(date: string): any {
    let lang = 'pt-BR'

    /** To compare just the dates, use startOf */

    const today = DateTime.now().startOf('day');
    const yesterday = DateTime.now().minus({ day: 1 }).startOf('day');
    const dateValue = DateTime.fromISO(date).startOf('day')

    // Is today?
    if (dateValue.hasSame(today, 'day')) {
      return 'Hoje'
    }

    // Is yesterday?
    if (dateValue.hasSame(yesterday, 'day')) {
      return 'ontem'
    }

    // https://stackoverflow.com/questions/60380884/how-to-get-relative-time-from-a-utc-date-using-luxon
    let relativeDate = DateTime.fromISO(date).setLocale(lang).toRelativeCalendar() //=> "2 days ago"

    return relativeDate
  }

  /**
   * Display: 24 de nov. de 2022, 21:21
   * @param dt ISO DATE
   */
  formatDateTime(dt: any) {

    if (!dt)
      return

    let ret

    // {{ o.created_at | date }}, {{ o.created_at | date : 'HH:mm' }}
    let date = this.convertDateIsoToString(dt, 'mediumDate')
    let time = this.convertDateIsoToString(dt, 'shortTime')
    ret = `${date}, ${time}`

    return ret
  }


  handleError(error: any, method: any) {
    debugger
    console.error(`${method}:`)
    console.error(error)

    let code = error?.error?.code || error.status

    if (code && code == 400 && error?.error?.errors) {
      // Bad request errors
      error.error.errors.forEach(() => {
        this._snackBar.open('Erro 400', 'OK')
      });
    }
    else if (code && code != 500) {
      this._snackBar.open('Erro de servidor 500', 'OK')

    } else {
      this._snackBar.open('Erro interno', 'OK')
    }
  }

  surprise() {
    
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
