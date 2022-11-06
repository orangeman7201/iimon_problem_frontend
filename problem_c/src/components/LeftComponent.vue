<template>
  <div class="component">
    <ul class="list">
      <li class="list-item" v-for="item in storeLeftItems" :key="item.id">
        {{ item }}
      </li>
    </ul>
    <button class="button" @click="moveLeftItemToRightArea">右へ移動</button>
  </div>
</template>

<script>
export default {
  name: 'LeftComponent',
  computed: {
    storeLeftItems() {
      return this.$store.getters.storeLeftItems
    }
  },
  methods: {
    moveLeftItemToRightArea() {
      if(this.storeLeftItems.length > 0) {
        this.$store.dispatch('moveLeftItemToRightArea')
      }
    },
  }
}
</script>
