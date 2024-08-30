<script setup lang="ts">
import { ref } from 'vue'
import { type Movie } from '../models/movie'
import { StarIcon } from '@heroicons/vue/24/solid'

interface Props {
  movies: Movie[]
}

const props = defineProps<Props>()

const emit = defineEmits(['updateRating'])

const editRating = (rating: number, movie: Movie) => {
  emit('updateRating', { rating, movie })
}
</script>

<template>
  <div class="max-w-full flex items-center justify-center h-screen mx-auto">
    <div class="flex items-center justify-center space-x-4">
      <div
        class="w-96 h-auto bg-white rounded-md flex flex-col items-center justify-start overflow-hidden shadow-2xl text-black"
        v-for="(movie, i) in props.movies"
        :key="i"
      >
        <div class="h-full overflow-hidden w-full relative">
          <img :src="movie.image" class="h-[320px] object-cover object-center" alt="" />
        </div>
        <div class="h-full p-4 flex flex-col items-start justify-start w-full">
          <div class="shrink-0 w-full">
            <h3 class="text-2xl">
              {{ movie.movieName }}
            </h3>
          </div>
          <div class="flex items-center justify-start space-x-1">
            <span
              class="text-xs bg-indigo-500 text-white py-0.5 px-2 rounded-full"
              v-for="(genre, i) in movie.genres"
              :key="i"
            >
              {{ genre.genre }}
            </span>
          </div>
        </div>

        <div class="overflow-scroll p-2">
          <p class="text-sm">{{ movie.description }}</p>
        </div>
        <div class="w-full flex items-center justify-start h-8 shrink-0">
          <span class="text-xs mr-2 leading-7"> Rating: ({{ movie.rating }}/5) </span>
          <div class="flex flex-row">
            <button v-for="i in 5" :key="i" @click="editRating(i, movie)">
              <StarIcon
                v-if="i > 0"
                :class="[movie.rating >= i ? 'text-yellow-500' : 'text-gray-500']"
                class="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
