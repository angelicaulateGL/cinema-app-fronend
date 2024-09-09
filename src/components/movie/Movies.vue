<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import MovieItem from './MovieItem.vue'
import type { Movie, MovieResponse } from '@/models/movie'

const movies = ref([])

const updateRating = async ({ rating, movie }: { rating: number; movie: Movie }) => {
  try {
    await axios.put(`http://localhost:3000/api/movies/${movie.id}`, { rating }).then(() => {
      getMovies()
    })
  } catch (error) {
    console.log('pintando', error)
  }
}

onMounted(() => {
  getMovies()
})

const getMovies = async () => {
  try {
    await axios.get('http://localhost:3000/api/movies').then((response) => {
      movies.value = response.data.map((el: MovieResponse) => ({
        ...el,
        id: el._id,
        genres: el.genres ? JSON.parse(el.genres) : []
      }))
    })
  } catch (error) {
    console.log('pintando', error)
  }
}
</script>

<template>
  <div class="flex space-x-4">
    <div
      class="flex-grow max-h-full max-w-sm w-96 p-4 bg-gray-50 rounded-xl shadow-md text-gray-600"
      v-for="(movie, i) in movies"
      :key="i"
    >
      <MovieItem :movie="movie" @update-rating="updateRating"> </MovieItem>
    </div>
  </div>
</template>
