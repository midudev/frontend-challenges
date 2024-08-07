<script setup>

    import { ref } from 'vue'
    const length = ref(0)
    const minLength = 12, maxLength = 72, alphabet = 'abcdefjhijklmnopqrstuvwxyz'
    const characters = ref([alphabet, alphabet.toUpperCase(),'0123456789','!@#~$%€&/()=?!'])
    const password = ref(''),  message = ref(''), messageType = ref('')
    const passwordGenerated = ref(false)

    const generatePassword = () => {
        if (length.value >= minLength && length.value <= maxLength) {
            message.value = 'Password generated!'

            password.value = ''
            for (let i=0; i < length.value; i++) {
                let chars = characters.value[Math.floor(Math.random() * (0 - characters.value.length) + characters.value.length)]
                password.value += chars[Math.floor(Math.random() * (0 - chars.length ) + chars.length)]
            }
            messageType.value = 'success-sfontfreda'
            passwordGenerated.value = true
            return
        }
        message.value = length.value > maxLength ? 'Password must  be shorter than 72 characters' :'Password must be longer than 12 characters'
        messageType.value = 'error-sfontfreda'
    }

    const copyPassword = () => {
        navigator.clipboard.writeText(password.value)
        message.value = 'Password copied to the clipboard!'
        messageType.value = 'info-sfontfreda'
    }

</script>

<template>
    
    <h1 class="title-sfontfreda"> 🍁 HACKTOBERFEST 2022 🍂</h1>
    <div class="password-generator-sfontfreda">
        <h1> Password generator</h1>
        <div class="slider-sfontfreda"> 0  <input v-model="length" type="range" min="0" max="72" step="1"> {{maxLength}} </div>
        <span class="length-value-sfontfreda"> Length: {{length}} </span>
        <div class="buttons-sfontfreda">
            <button @click="generatePassword(10)"> Generate Password </button>
            <button title="Copy password to clipboard" v-if="passwordGenerated" class="copy-button" @click="copyPassword()"> 	
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>
            </button>
        </div>
        <span class="message-sfontfreda" :class=messageType> {{message}} </span>
    </div>

</template>

<style>
    .title-sfontfreda h1 {
        text-align: center;
    }

    .password-generator-sfontfreda {
        position: relative;
        top: 10px;
        background-color: white;
        border-radius: 20px;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, 
                    rgba(79, 79, 107, 0.15) 0px 50px 100px -20px, 
                    rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
        margin: auto;
        height: 250px;
        padding: 20px;
    }

    .slider-sfontfreda input {
        width: 90%;
        vertical-align: middle;
    }

    .length-value-sfontfreda {
        text-align: center;
        font-size: 18px;
        display: block;
        padding: 10px;
    }
    
    .buttons-sfontfreda {
        width: 100%;
        display: flex;
        align-items:flex-end ;
        justify-content: center;
    }
    
    .buttons-sfontfreda button {
        height: 40px;
        font-size: 20px;
        padding: 10px;
        margin: 10px;
        align-items: center;
        border-radius: 10px;
        border: 0px;
    }

    .message-sfontfreda {
        text-align: center;
        font-size: 20px;
        display: block;
        padding: 10px;
    }

    .info-sfontfreda {
        background-color: rgb(183, 232, 255);
        border-radius: 10px;
    }

    .success-sfontfreda {
        background-color: rgb(183, 255, 194);
        border-radius: 10px;    
    }

    .error-sfontfreda {
        background-color: rgb(209, 132, 132);
        border-radius: 10px;    
    }    

</style>