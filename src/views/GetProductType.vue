<template>
    <div class="router">
        <div class="list get_product_types" v-for="t in typess" :key="t.id">
            <p><b>Id: </b>{{ t.id }}</p>
            <p><b>Name UZ: </b>{{ t.name_uz }}</p>
            <p><b>Name RU: </b>{{ t.name_ru }}</p>
            <p><b>Name UK: </b>{{ t.name_uk }}</p>
            <p><b>Description: </b>{{ t.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            typess: [
                { id: 1, name_uz: 'yovvoyi', name_ru: 'yovvoyi', name_uk: 'yovvoyi', description: null }
            ]
        }
    },
    mounted() {
        axios
            .get('http://94.158.54.194:9092/api/product/get-product-types')
            .then(response => (
                this.typess = response.data
            ))
    }
}
</script>

<style>

</style>