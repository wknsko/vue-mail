<template>
    <div v-if="email">
        <h3>{{ email.sub }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis aperiam labore? Maxime, ipsam rem?
            Fuga, nulla? Facere cum dolores asperiores porro tempora, assumenda nesciunt. Architecto ut qui delectus
            error repudiandae tempora sed magnam itaque maiores, optio, eius autem adipisci non nihil! Quos hey sit vel
            tempora, ea minima velit quibusdam.</p>
        
    </div>
    <div v-else>
        Choose an email you want to read
    </div>

</template>

<script>
export default {
    inject: ['emails'],
    props: ['mail'],
        data() {
            return {
                
            }
        },
    computed: {
        email() {
            return this.emails.find(e => e.id === this.mail)
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.btn {
    margin-top: 30px;
    margin-left: 20px;
    border: 1px solid #2c3e50;
}

a {
    text-decoration: none;
    color: #999cde;
}

.btn:hover {
    border-color: #999cde;
}

h3 {
    padding: 20px;
}
</style>