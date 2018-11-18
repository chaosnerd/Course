<template>
  <v-app>
    <v-layout
      wrap
      style="height: 100%;"
    >
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="mini"
        absolute
        dark
      >
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYp1893e9HwCm_oPAKRUrQJ2SaVIyVZxaa_k4ViK89hkNxWlsVw">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>อ.แจว มาแจวจ้ําจึก</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider light></v-divider>
            <router-link  to="/">
              <v-list-tile @click.stop="mini = !mini">
                  <v-list-tile-action >
                      <v-icon>assignment</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </router-link>
            <router-link  to="/test">
              <v-list-tile @click.stop="mini = !mini">
                  <v-list-tile-action >
                      <v-icon>exit_to_app</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Logout</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </router-link>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
    </v-layout>
    
    
  </v-app>
</template>

<script>
import Course from './components/Course'

export default {
  name: 'App',
  components: {
    Course
  },
   data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard'  },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: true,
      right: null
    }
  }
}
</script>
