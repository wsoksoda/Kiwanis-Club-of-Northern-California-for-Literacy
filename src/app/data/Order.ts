export interface Order {
    id: number,
    numBooks : number,
    ageLower: number,
    ageUpper: number,
    language: string,
    address: string,
    email : string,
    deliveryDate: Date
};

export const DEFAULT_ORDER: Order = {
    id: -1,
    numBooks: 0,
    ageLower: -1,
    ageUpper: -1,
    language: 'English',
    address: '',
    email:'',
    deliveryDate: new Date()
};

export type PartialOrder = {
    numBooks : number,
    ageLower: number, 
    ageUpper: number,
    language: string,
    address: string,
    email : string,
    deliveryDate: Date
};