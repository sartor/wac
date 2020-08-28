<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row>
      <v-card>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="3"
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="5"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
              >
                <v-text-field
                  v-model="description"
                  label="Description"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
              >
                <v-text-field
                  v-model="sum"
                  :rules="sumRules"
                  label="Sum (UAH)"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="3"
              >
                <v-btn
                  color="primary"
                  @click="addEvent"
                >
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
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
                  <div>Contribution: {{ event.sum }} UAH</div>
                  <div>Start: {{ event.startAt }}</div>
                  <div>End: {{ event.endAt }}</div>
                </v-card-text>
              </div>
              <div>
                <v-chip
                  v-for="member in event.members"
                  :key="member.name"
                  class="ma-2"
                >
                  {{ member.name }}
                </v-chip>
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
    data: () => ({
      valid: false,
      name: '',
      description: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      sum: '',
      sumRules: [
        v => !!v || 'Sum is required',
      ],
    }),
    computed: mapState({
      events: 'events',
    }),
    methods: {
      addEvent () {
        this.$store.commit(
          'ADD_EVENT',
          {
            name: this.name,
            description: this.description,
            sum: this.sum,
          })

        this.name = null
        this.description = null
        this.sum = null
      },
    },
  }
</script>
