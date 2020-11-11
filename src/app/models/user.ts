import { Client } from './client';

export class User{
    constructor(
        public id?: number,
        public email?: string,
        public password?: string,
        public client?: Client){
    }






}