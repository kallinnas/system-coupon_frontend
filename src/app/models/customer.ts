import { Coupon } from './coupons';

export class Customer {

    public constructor(
        public id?: number, 
        public firstName?: string,
        public lastName?: string, 
        public coupons?: Coupon[]) { }
    
}