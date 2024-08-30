export interface Movie {
  movieName: string
  description: string
  genres: Genre[]
  image: string
  rating: number
}

export interface Genre {
  genre: string
}
