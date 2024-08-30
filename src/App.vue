<script setup lang="ts">
import { ref } from 'vue'
import { Movie } from './models/movie'
import Movies from './components/Movies.vue'

const movies = ref<Movie[]>([
  {
    movieName: 'Toy-Story',
    description:
      'Toy Story is a 1995 American animated comedy film produced by Pixar Animation Studios for Walt Disney Pictures. ',
    genres: [{ genre: 'animation' }, { genre: 'adventure' }],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Toy_Story_logo.jpg',
    rating: 5
  },
  {
    movieName: 'Wall-E',
    description:
      'Its completely worth the ticket price, this couldnt have been a more perfect film.',
    genres: [{ genre: 'animation' }, { genre: 'adventure' }],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Wall-e_%26_Eve_%28Perler%29_%283927127928%29.jpg',
    rating: 3
  }
])

const updateRating = ({ rating, movie }: { rating: number; movie: Movie }) => {
  movies.value = movies.value.map((el) => (el === movie ? { ...el, rating } : el))
}
</script>

<template>
  <Movies :movies="movies" @update-rating="updateRating"> </Movies>
</template>
