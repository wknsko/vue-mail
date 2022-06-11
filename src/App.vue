<template>

  <router-view></router-view>

</template>

<script>



export default {
    data() {
        return {
            isAuth: false
        };
    },
    methods: {
        login() {
            this.isAuth = true;
            this.$router.push("/dashboard");
        },
        logout() {
            this.isAuth = false;
            this.$router.push({
                path: "/login",
                query: {
                    page: this.$route.path
                }
            });
        }
         },
        provide() {
            return {
                login: this.login,
                logout: this.logout,
                 emails: [
                  { id: "1", sub: "Maxime, ipsam rem? Fuga, nulla?", read: false },
                   { id: "2", sub: "Eius adipisci iste repellat", read: false },
                   { id: "3", sub: "Officiis veritatis totam architecto.", read: true },
                   { id: "4", sub: "Excepturi sequi, fugit quibusdam!", read: true },
                   { id: "5", sub: " Maiores repellat autem velit accusantium dignissimos!", read: true }
                ]
            };
        }
    }

</script>

<style scooped>


</style>
