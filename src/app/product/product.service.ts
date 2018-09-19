import {Injectable} from '@angular/core'
import {IProduct} from './product.int'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';



@Injectable({
	providedIn: 'root'
})

export class ProductService{
  private webserviceurl ="api/product/products.json";
  constructor (private httpreq: HttpClient)
  {

  }
	getProducts():Observable<IProduct[]>{
//
return this.httpreq.get<IProduct[]>(this.webserviceurl).pipe(
  tap(data => console.log('All :'+ JSON.stringify(data))),catchError(this.handleError)
)
}
 private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
   errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
