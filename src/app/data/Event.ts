export interface Event {
	id: number,
	title: string,
	description: string,
	address: string,
	isLiteracyClubAttending: boolean,
	startDate: Date,
	endDate: Date,
  orderNumber: number
}

export let DEFAULT_EVENT: Event = {
    id: -1,
    title: '',
    description: '',
    address: '',
    isLiteracyClubAttending: false,
    startDate: new Date(),
    endDate: new Date(),
    orderNumber: -1
  }