<template>
    <TheNavbar />
    <div class="card" @submit.prevent style="width: 500px">
        <div class="card-body">
            <h2>Restore Your Password</h2>
            <div class="d-grid gap-2">
                <label for="email">Email</label>
                <input type="text" id="email" />
                <button class="btn btn-primary">Send password</button>
                <router-link class="link" to="/login"> &lt; Back </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'

export default {
components: {
    TheNavbar
}
}
</script>

<style  scoped>
h2{
    margin-bottom: 50px
}

</style>