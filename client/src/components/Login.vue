<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
		    //login trigger 
            login() {
			    //check if username and password are empty
                if(this.input.username != "" && this.input.password != "") {
				    //check if username and password consistent with mock data
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("isLoggedIn", true); //login success
                        this.$router.replace({ name: "secure" }); router switch
                    } else {
                        console.log("The username and / or password is incorrect"); //if incorrect username or password
                    }
                } else {
                    console.log("A username and password must be present");//if no username or password input
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>