<template>
<div class="cart-list">
  <scroll class="content" ref="scroll">
    <cart-list-item v-for="item in cartList" :item-info="item" :key="item.iid" />
  </scroll>
</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem';

import {
  mapGetters
} from 'vuex'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  data() {
    return {

    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>
