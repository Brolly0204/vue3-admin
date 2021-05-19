<template>
  <div>
    <h1>Dashboard page</h1>
    <svg-icon icon-class="bug"></svg-icon>
    <!-- icon-class svg图标名称 class-name 额外的自定义类名 @click绑定事件 -->
    <svg-icon icon-class="404" class-name="custom-class" @click="sayHi"></svg-icon>

  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  setup() {
    const sayHi = () => {
      alert('hi svg')
    }
    return {
      sayHi
    }
  }
}
</script>

<style lang="scss">
  .custom-class { // 自定义样式404
    font-size: 200px;
    color: green;
  }
</style>
