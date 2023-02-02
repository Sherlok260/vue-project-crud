<template>
    <div class="router">
        <form @submit.prevent>
            <div>Id</div>
            <input type="text" :value="product.id" @input="product.id = $event.target.value" placeholder="Id">
            <div>Product type id</div>
            <input type="text" :value="product.product_type_id" @input="product.product_type_id = $event.target.value"
                placeholder="Product type id">
            <div>Name uz</div>
            <input type="text" :value="product.name_uz" @input="product.name_uz = $event.target.value"
                placeholder="Name uz">
            <div>Cost</div>
            <input type="text" :value="product.cost" @input="product.cost = $event.target.value" placeholder="Cost">
            <div>Address</div>
            <input type="text" :value="product.address" @input="product.address = $event.target.value"
                placeholder="Address">
            <div>Created date</div>
            <input type="text" :value="product.created_date" @input="product.created_date = $event.target.value"
                placeholder="Created date">
            <div class="btn"><button @click="put_form">Put</button></div>
        </form>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            product: {
                id: '',
                product_type_id: '',
                name_uz: '',
                cost: '',
                address: '',
                created_date: ''
            }
        }
    },
    methods: {
        put_form() {
            axios.put('http://94.158.54.194:9092/api/product', this.product)
                .then((res) => {
                    alert(res.data)
                    success = true
                })
                .catch((error) =>
                    error = error.data.message)
        }
    }
}

</script>

<style scoped>
input {
    border: none;
    border-radius: 3px;
    align-items: center;
    width: 480px;
    margin-bottom: 10px;
    padding: 10px;
}

button {
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: orange;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.btn {
    margin-top: 5px;
    display: flex;
}
</style>