<template lang="">
    <div id='parent'>
        <form @submit.prevent="formSubmit">
            <br>
            <h1>Sign Up Form</h1>
            <label>Email: </label>
            <br>
            <input type="email" required v-model="email">
            <br>
            <br>
            <label>Password: </label>
            <br>
            <input type="password" required v-model="password">
            <br>
            <br>
            <label>Role: </label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
                <option value="">Select a role:</option>
            </select>
            <br>
            <br>
            <label>languages: </label>
            <br>
            <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage">
            <button type="submit">Submit</button>
            <br>
            <div v-for="lang,index in languages" :key="index+1">
                <p id="para" @click="deleteLang(lang)">
                    {{index+1}}:{{lang}}
                </p>
            </div>
            <div class="terms">
                <input type="checkbox" required v-model="terms">
                <label> Accept Terms and Conditions</label>
                <br>
                <br>
                <div>
                    <input type="checkbox" value="Mario">
                   
                    <label> Mario</label>
                </div>
                <br>
                <div>
                    <input type="checkbox" value="Luigi">
                   
                    <label> Luigi</label>
                </div>
                <br>
                <div>
                    <input type="checkbox" value="Yoshi">
                   
                    <label> Yoshi</label>
                </div>
            </div>
            <br>
            <br>
            <div>
                <p>Email:{{email}}</p>
                <p>Password:{{password}}</p>
                <p>Role:{{role}}</p>
                <p>Terms:{{terms}}</p>
                <p>People:{{names}}</p>
                <p>Current Language:{{currentLanguage}}</p>
                <p>Language:{{languages}}</p>
            </div>
            <br>
            <br>
        </form>

    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'',
            terms:false,
            names:[],
            currentLanguage:'',
            languages:['something','nothing']
        }
    },
    methods:{
        keyfinder(event){
            console.log(event);
        },
        deleteLang(lang){
            this.languages = this.languages.filter (item=> item !=lang)
        },
        formSubmit(){
            console.log("The page has refreshed")
            this.email = ""
            this.password = ""
            this.terms = ""
            this.currentLanguage = ""
            this.role = ""
        },addLanguage(){
            if(!this.languages.includes(this.currentLanguage)){
                this.languages.push(this.currentLanguage)
            }
        }
    }
}
</script>
<style>
    form{
        margin-left:25vw;
        margin-right:25vw;
        background-image: linear-gradient(to bottom right, rgb(126, 90, 170), rgb(15, 137, 19));
        border-radius: 6px;
        box-shadow: 3px 3px black;
        color: white;
    }
    input{
        
        background-color: rgba(126, 90, 170, 0);
        border: 0px;
        box-shadow: 0px 0px 0px 2px black;
    }
    button{
        margin-left: 2vw;
        border: 0px;
        box-shadow: 0px 0px 0px 2px black;
        background-color: rgba(126, 90, 170, 0);
        transition: 0.3s;
    }
    button:hover{
        color: white; 
        background-color: rgba(73, 55, 95, 0.564);  
    }

</style>