<script setup lang="ts">
import type { Movie } from '@/models/movie'
import { StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps<{ movie: Movie }>()

const emit = defineEmits(['updateRating'])

const editRating = (rating: number, movie: Movie) => {
  emit('updateRating', { rating, movie })
}
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="items-center justify-center">
      <img :src="movie.image" class="w-full h-96" alt="" />
    </div>
    <div class="p-2 space-x-4">
      <h3 class="text-2xl">
        {{ movie.title }}
      </h3>
    </div>
    <div class="flex items-center justify-start space-x-1">
      <span
        class="text-xs bg-indigo-500 text-white py-0.5 px-2 rounded-full"
        v-for="(genre, i) in movie.genres"
        :key="i"
      >
        {{ genre.name }}
      </span>
    </div>

    <div class="p-2">
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
</template>
