import BaseHttpService from "./http.service";
import queryString from 'query-string';


export class ProductService extends BaseHttpService {
    getProducts(page: number, limit = 8, search?: string ) {
        const queryObj = { page, limit, search };

        console.log(queryObj)
        const queryStr = queryString.stringify(queryObj);
        return this.get('api/v1/products' + (queryStr ? `?${queryStr}` : ''));
    }
}