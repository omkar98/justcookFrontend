<template>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#85BD36"
    >
      <v-app-bar-nav-icon v-model="drawer" @click.stop="drawer = toggleDrawer(drawer)"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 150px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">JustCook</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
        <v-avatar
          size="80px"
        >
          <v-img
            src="@/assets/justCook.png"
          ></v-img>
        </v-avatar>
    </v-app-bar>
</template>

<script>
export default {
  props: {
    source: String,
    drawer: Number,
    toggleDrawer: Function
  }
}
</script>
