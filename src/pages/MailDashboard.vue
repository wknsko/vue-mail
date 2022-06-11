<template>
<TheNavbar />
    <div class="card" style="width: 600px">
        <div class="card-body">
            <h3>Welcome Back!</h3>
            <div>
                You have {{unreadCount}} new messages out of {{emails.length}}
            </div>
            <router-link to="/mail"><button class="btn  btn-primary">Go to inbox</button> </router-link>
            <router-link to="/login"><button class="btn  btn-primary">Log out</button></router-link>
        </div>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'

export default {
    data() {
        return {
           unreadCount: 0 
        }
    },
    inject: ['emails'],
    mounted() {
        this.unreadCount = this.emails.filter(i => i.read === false).length
    },
    components: {
        TheNavbar
    }
}
</script>

<style scoped>
button {
    margin-top:20px;
    margin-left: 10px;
}

</style>