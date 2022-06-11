<template>
    <form class="card " @submit.prevent="submit" style="width: 500px">
        <div class="card-body ">
            <h2 class="card-title">Log in</h2>
            <h6 class="card-subtitle mb-2 text-muted">to access your emails</h6>
            <div class="d-grid gap-2">
                <label for="email">Email</label>
                <input type="text" id="email" v-model.trim="email" />
                <label for="password">Password</label>
                <input type="password" v-model.trim="password" id="password" />
                <button class="btn btn-primary" type="button" @click="submit">Enter</button>
                <router-link class="link" to="/forget">Forgot password?</router-link>
            </div>
        </div>
    </form>
</template>

<script>
export default {
   inject: ['login'],
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        isValid() {
            return this.email !== '' && this.password !== ''
        }
    },
    methods: {
        submit() {
            this.login();
        }
    }
}
</script>

<style scoped>

</style>