<template>
  <div class="component">
    <ul class="list">
      <li class="list-item" v-for="item in storeRightItems" :key="item.id">
        {{ item }}
      </li>
    </ul>
    <button class="button" @click="moveRightItemToLeftArea">左へ移動</button>
  </div>
</template>

<script>
export default {
  name: 'RightComponent',
  computed: {
    storeRightItems() {
      return this.$store.getters.storeRightItems
    }
  },
  methods: {
    moveRightItemToLeftArea() {
      if(this.storeRightItems.length > 0) {
        this.$store.dispatch('moveRightItemToLeftArea')
      }
    },
  }
}
</script>
