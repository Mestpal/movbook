<template>
  <v-card>
    <v-card-text>
      <ul
        class="contentDescription"
      >
        <li v-if="contentData.title">
          <h1 v-text="contentData.title" />
        </li>
        <li v-if="contentData.homepage">
          <a
            :href="contentData.homepage"
            target="_blank"
          >
            Homepage
          </a>
        </li>
        <li
          v-if="contentData.original_title"
          v-text="`Original title: ${contentData.original_title}`"
        />
        <li
          v-if="contentData.release_date"
          v-text="`Release date: ${contentData.release_date}`"
        />
        <li
          v-if="contentData.original_language"
          v-text="`Original language: ${contentData.original_language}`"
        />
        <li> Genres: </li>
        <ul
          class="contentListSecondLevel"
        >
          <li
            v-for="(genre, index) in contentData.genres"
            :key="index"
            v-text="genre.name"
          />
        </ul>
        <li> Production companies: </li>
        <ul
          v-if="contentData.production_companies.length"
          class="contentListSecondLevel"
        >
          <li
            v-for="(company, index) in contentData.production_companies"
            :key="index"
            v-text="company.name"
          />
        </ul>
        <li
          v-if="contentData.overview"
        >
          <h2>Overview</h2>
          <p v-text="contentData.overview" />
        </li>
        <li>
          <h2>Vote average</h2>
          <p v-text="contentData.vote_average" />
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    contentData: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
