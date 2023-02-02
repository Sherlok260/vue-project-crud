<template>
    <div class="router">
        <div class="list get_product" v-for="product in products" :key="product.id">
            <p><b>Id: </b>{{ product.id }}</p>
            <p><b>Product Type Id: </b>{{ product.product_type_id }}</p>
            <p><b>Name UZ: </b>{{ product.name_uz }}</p>
            <p><b>Cost: </b>{{ product.cost }}</p>
            <p><b>Address: </b>{{ product.address }}</p>
            <p><b>Created Date: </b>{{ product.created_date }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            products: [
                // { id: 1, product_type_id: 1, name_uz: 'qwer', cost: 123, address: '1234', created_date: 2345 },
                // { id: 1, product_type_id: 1, name_uz: 'qwer', cost: 123, address: '1234', created_date: 2345 }
            ]
        }
    },
    mounted() {
        axios
            .get('http://94.158.54.194:9092/api/product')
            .then(response => (
                this.products = response.data
            ))
    }
}
</script>

<style>

</style>