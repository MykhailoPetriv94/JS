<template>
    <b-card>
        <b-card-img></b-card-img>
        <b-card-body>{{ character }}</b-card-body>
        <b-card-footer>Footer</b-card-footer>

    </b-card>  
</template>

<script>
export default {
props: {
    character: {
        type: Object,
        required: true
    }
}
}
</script>

<style>
</style>