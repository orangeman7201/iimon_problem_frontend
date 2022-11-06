<template>
  <div class="block">
    <form class="input-area">
      <input type="text" v-model="input" class="input-box">
      <button @click.prevent="addFruit(event)" class="input-button">追加</button>
    </form>
    <div v-for=" (fruit, index) in fruits" :key="fruit.id" class="fruit-box">
      <button @click="deleteFruit(index)" class="fruit-delete-button">x</button>
      <div class="fruit-name-area">{{ fruit }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      input: "",
      fruits: [],
    }
  },
  methods: {
    addFruit() {
      this.fruits.push(this.input)
      this.input = ""
    },
    deleteFruit(index) {
      this.fruits.splice(index, 1)
    }
  }
}

</script>

<style>
.block {
  font-size: 16px;
  margin: auto;
  width: 300px;
}
.input-area {
  display: flex;
  height: 30px;
  margin-bottom: 48px;
}
.input-area .input-box {
  flex-grow: 1
}
.input-area .input-button {
  background-color: navy;
  border: none;
  color: white;
  margin-left: 8px;
}
.fruit-box {
  display: flex;
  height: 50px;
  margin-bottom: 8px;
}
.fruit-box .fruit-delete-button {
  background-color: navy;
  border: none;
  color: white;
  display: inline;
  font-size: 20px;
  width: 50px;
}
.fruit-box .fruit-name-area {
  align-items: center;
  border: 1px solid navy;
  display: flex;
  flex-grow: 1;
  padding-left: 20px;
}
</style>
