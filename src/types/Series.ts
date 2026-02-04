export interface Series {
    id: string
    title: string
    season: number
    episode: number
    minute: number
}

export type SeriesFormData = Omit<Series, 'id'>;