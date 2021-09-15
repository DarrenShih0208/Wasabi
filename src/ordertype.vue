<template>
  <div>
		<component :is="orderstyle"></component>
  </div>
</template>

<script>
import radio from './radio'
import selects from './selects'
import texts from './texts'

export default {
	props:['orderstyle'],
	components:{
    radio,
		selects,
		texts,
  },
}
</script>