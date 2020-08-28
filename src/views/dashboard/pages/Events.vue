<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="3">
        <template>
          <v-card
            v-for="event in events"
            :key="event.name"
            class="mx-auto"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{ event.name }}</v-card-title>
                <hr>
                <v-card-subtitle v-if="event.description">
                  {{ event.description }}
                </v-card-subtitle>
                <v-card-text>
                  <div>Contribution: {{ event.sum }} {{ event.currency }}</div>
                  <div>Start: {{ event.startAt }}</div>
                  <div>End: {{ event.endAt }}</div>
                </v-card-text>
              </div>
              <div>
                <v-card-actions>
                  <v-btn
                    icon
                    color="deep-purple accent-4"
                  >
                    <v-icon>mdi-content-save</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      events: 'events',
    }),
  }
</script>
