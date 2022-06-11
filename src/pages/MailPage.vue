<template>
    <TheNavbar />
    <div class="card" v-cloak>
        <h3>INBOX</h3>
        <div class="card-container">
            <div class="card-nav">
                <ul>
                    <li class="list-item" v-for="item in emails" :key="item.id" @click="changePost(item)"
                        :class="item.read ? '' : 'bold'
                         "> {{ item.sub}}</li>
                </ul>
            </div>
            <div class="card-body">
                <AppEmailBody :mail="id.toString()" />
                <button class="btn" @click="unread(id)">Mark as Unread</button>
               
            </div>
        </div>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar';
import AppEmailBody from '../components/AppEmailBody';


export default {
    data() {
        return {
            id: 1,
            p: {},
            unreadCount: 0
        }
    },
    inject: ['emails'],
    mounted() {
        
    },
    methods: {
        changePost(i) {
            i.read = true;
            this.id = i.id ;
            this.$forceUpdate()
        
            
        }, 
        unread(id) {
            this.emails[id - 1].read = false;
            this.$forceUpdate()
            
        }, 
        

    },
    
    components: {
        TheNavbar,
        AppEmailBody
    }
}
</script>

<style scoped>
.bold {
    font-weight: 600;
    color: rgb(50, 31, 31)
}
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

.card {
    margin: 30px;
    max-width: 900px;
    margin: 0 auto;
    height: 500px;
}

.card-container {
    display: flex;
    align-items: flex-start;
    margin: 20px;

}

.card.no-padding {
    padding: 0;
}

.card-nav {
    min-width: 220px;
}

.card-body {
    padding: 0 1rem;
}

.list-item {
    padding: .2rem;
    cursor: pointer;
    list-style: none;

}

.list-item a {
    color: #2c3e50;
}

.list-item a.active {
    color: #3eaf7c;
    font-weight: bold;
}
</style>
