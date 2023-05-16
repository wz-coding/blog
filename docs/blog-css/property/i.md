# I

<script setup> 
    import { Propertys } from '@data/css/property.js'       
    const baseCssUrl = 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/'       
    const { I } = Propertys  
                  
    //下面表格将使用自定义组件               
</script>   

<template v-for="item in I">
<Mcard :item=item :linkUrl=baseCssUrl></Mcard>
</template>