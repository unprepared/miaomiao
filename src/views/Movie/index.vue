<template>
    <div id="main">
        <Header />
            hello Movie
        <TabBar />
    </div>
</template>

<script>
import  Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
    name : 'movie',
    components :{
        Header,
        TabBar
    }
}
</script>

<style>

</style>
