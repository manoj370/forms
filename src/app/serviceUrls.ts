import { environment } from '../environments/environment.prod';

export class urlServices {
    getCall = `${environment.serviceUrl}/get`;
    postcall = `${environment.serviceUrl}/get`;
    fetch = `${environment.serviceUrl}/get`;
}