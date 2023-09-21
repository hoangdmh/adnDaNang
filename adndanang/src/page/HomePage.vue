<template>
    <comp-home />  
</template>

<script>
import CompMenuLeft from '../component/CompMenuLeft.vue';
import CompHome from '../component/CompHome.vue';

export default {
    name: 'home-page',
    components: {
        CompMenuLeft,
        CompHome
    },
    metaInfo: {
      title: 'Xét nghiệm ADN Đà Nẵng',
    }
}
</script>

<style>

</style>