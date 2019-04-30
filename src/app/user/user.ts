import { Address } from './address';

/*Its good that I exported an interface rather than a class for User Data type supplied by RESTful web service
* Good design practise
* */
export interface UserDataType {
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;
    website: string;
    company: Company;
}


export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

