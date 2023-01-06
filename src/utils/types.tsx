export interface Note {
    title: string,
    date: number | Date,
    key?: string,
    content: string
}

export interface Folder {
    name: string,
    notes:Note[],
    key?: string,
    date: number | Date
}
