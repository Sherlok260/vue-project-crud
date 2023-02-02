<template>
    <div class="router">
        <div>
            <div class="get_menu"><b>Get All Product</b><router-link :to="{name: 'getProduct'}" class="get_button">GET</router-link></div>
            <div class="get_menu"><b>Get Product Type</b><router-link :to="{name: 'getProductType'}" class="get_button">GET</router-link></div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.router {
    border-radius: 5px;
    background-color: darkgray;
    margin: auto;
    width: 500px;
    padding: 30px;
}
.get_menu {
    margin-top: 10px;
}
.get_button {
    color: white;
    border: none;
    text-decoration: none;
    border-radius: 3px;
    margin-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: dodgerblue;
    cursor: pointer;
}
.list {
    margin-top: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
}
.get_product {
    /* display: none; */
}
.get_product_types {
    /* display: none; */
}
</style>