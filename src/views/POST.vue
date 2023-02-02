<template>
    <div class="router">
        <form @submit.prevent>
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
            <div class="btn"><button @click="post_form">Post</button></div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            product: {
                product_type_id: '',
                name_uz: '',
                cost: '',
                address: '',
                created_date: ''
            }
        }
    },
    methods: {
        post_form() {
            const headers = {
                "Content-Type": "application/json",
                "accept": "application/json"
            };
            axios.post('http://94.158.54.194:9092/api/product', this.product, {headers})
                .then((res) => {
                    alert(res.data)
                })
                .catch((error) =>
                    alert(error.data.message)
                )
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
    background-color: chartreuse;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.btn {
    margin-top: 5px;
    display: flex;
}
</style>