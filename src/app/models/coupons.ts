import { Company } from './company';

export class Coupon {

    public constructor(
        public id?: number,
        public company?: Company,
        public companyId?: number,
        public title?: string,
        public startDate?: string,
        public endDate?: string,
        public category?: number,
        public amount?: number,
        public price?: number,
        public description?: string,
        public imageURL?: string) { }
} 