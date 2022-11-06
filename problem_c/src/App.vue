<template>
  <div class="block">
    <div class="component-area">
      <LeftComponent />
      <RightComponent />
    </div>
  </div>
</template>

<script>
import LeftComponent from './components/LeftComponent.vue'
import RightComponent from './components/RightComponent.vue'

export default {
  name: 'App',
  components: {
    LeftComponent,
    RightComponent,
  }
}
</script>

<style>
.block {
  width: 700px;
  margin: auto;
  font-size: 16px;
}
.component-area {
  display: flex;
  justify-content: space-between;
}
.component {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.list {
  width: 300px;
  height: 400px;
  border: 1px solid navy;
  padding: 8px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 30px;
}
.list-item {
  text-align: center;
  border-bottom: 1px solid navy;
  list-style: none;
  margin-bottom: 8px;
  padding-bottom: 4px;
  width: 80%;
}
.button {
  background-color: navy;
  color: white;
  height: 40px;
  padding: 0 24px;
  border: none
}
</style>
