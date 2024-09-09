export interface MovieResponse {
  _id: string
  title: string
  description: string
  genres: string
  image: string
  rating: number
}

export interface Movie {
  id: string
  title: string
  description: string
  genres: Genre[]
  image: string
  rating: number
}

export interface Genre {
  id: string
  name: string
}
