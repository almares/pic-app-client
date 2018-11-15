<template>
    <div id="login">
        <h1>Login</h1>
        <h4>or</h4>
        <button id="prettyButton" type="button" v-on:click="createAccount()">create an account</button>
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
                    if(this.input.username == "Randy" && this.input.password == "hello") {
                        this.$emit("isLoggedIn", true);
                        //this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect"); //if incorrect username or password
                    }
                } else {
                    console.log("A username and password must be present");//if no username or password input
                }
            },
            createAccount() {

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

    #prettyButton {
        background:none!important;
        color:inherit;
        border:none; 
        padding:0!important;
        font: inherit;
        /*border is optional*/
        border-bottom:1px solid #444; 
        cursor: pointer;
    }
</style>
