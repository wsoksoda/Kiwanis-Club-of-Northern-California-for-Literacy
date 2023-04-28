export interface Order {
    id: number,
    ageLower: number,
    ageUpper: number,
    language: string,
    address: string,
    deliveryDate: Date
};

export const DEFAULT_ORDER: Order = {
    id: -1,
    ageLower: -1,
    ageUpper: -1,
    language: 'English',
    address: '',
    deliveryDate: new Date()
};