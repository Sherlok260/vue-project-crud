<template>
    <div class="router">
        <form @submit.prevent>
            <div>Id</div>
            <input type="text" :value="id" @input="id = $event.target.value" placeholder="Id">
            <div class="btn"><button @click="delete_form">Delete</button></div>
        </form>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            id: ''    
        }
    },
    methods: {
        delete_form() {
            axios.delete('http://94.158.54.194:9092/api/product/'+this.id)
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
    background-color: red;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.btn {
    margin-top: 5px;
    display: flex;
}
</style>