<script setup>
import {ref} from 'vue'
import Footer from './Footer.vue'
import generatePsswrd from './pswdScript'


let pass = ref('')
let characters = ref(0)
const hasSymbols = ref(true)
const hasNumbers = ref(true)

function handleChangle (e) {
characters.value = e.target.value;
const psswd = generatePsswrd(characters.value,hasSymbols.value,hasNumbers.value)
pass.value = psswd
}

function copyPswd(){
   // Copy the text inside the text field
  navigator.clipboard.writeText(`${pass.value}`).then(
		() => {alert("Copied the password: " +pass.value + " to your clipboard")},
		() => {alert("There is a problem")}
	) 
}
</script>

<template>
	
	<div id="jorbelca-app" className="bg-conic-to-t from-gray-900 via-gray-100 to-gray-900">
<div class="jorbelca-title">
		Password Generator
	</div>
		<div class="title"> <h1>Generate a password of &nbsp;<span class="characters">{{characters}} </span>&nbsp;characters</h1></div>
 
	<div class="form">
	<form @submit.prevent="onSubmit">		

<div class="options">
	<div>
			<input type="checkbox" name='symbols' id="symbols" checked v-model="hasSymbols">
			<label for="symbols">Symbols</label>
			</div>
			<div>
			<input value="numbers" type="checkbox" name="numbers" id="numbers" checked v-model="hasNumbers">
			<label for="numbers">Numbers</label>
		</div>
</div>
		<input type="range" min="5" max="25" step="1"	list="tickmarks" @change="handleChangle">
		
		<br>
	</form>		
	</div>
	

	<div class="psswd">{{pass}}
		<div v-if="pass" 
		class="copy-icon" @click="copyPswd"><svg xmlns="http://www.w3.org/2000/svg" 
			transform="scale(0.3)"
			fill="#FFF"
			viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 64h-49.61C262.1 27.48 230.7 0 192 0S121 27.48 113.6 64H64C28.65 64 0 92.66 0 128v320c0 35.34 28.65 64 64 64h256c35.35 0 64-28.66 64-64V128C384 92.66 355.3 64 320 64zM192 48c13.23 0 24 10.77 24 24S205.2 96 192 96S168 85.23 168 72S178.8 48 192 48zM336 448c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V128c0-8.82 7.178-16 16-16h18.26C80.93 117.1 80 122.4 80 128v16C80 152.8 87.16 160 96 160h192c8.836 0 16-7.164 16-16V128c0-5.559-.9316-10.86-2.264-16H320c8.822 0 16 7.18 16 16V448z"/></svg>
		</div>
	</div>

	<Footer/>
</div>

</template>

<style scoped>
         
@font-face {
		font-family: 'TheGoodMonolith';
		src: url('/jorbelca/TheGoodMonolith.ttf');
		font-display: swap;
	}               
#jorbelca-app{
	color:white;
	display:flex;
	flex-direction:column;
	align-items: center;
	height: 100%;
	justify-content:center;
	background: linear-gradient( to bottom, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99));
	min-width: 400px;
	min-height: 350px;
}
.psswd{
	font: bold 36px Poppins, sans-serif;
	background-image: linear-gradient(to right, rgb(236, 72, 1), rgb(239, 68, 68), rgb(234, 179, 8));
	background-clip: text;
  color: transparent;
	display: flex;
	align-items:flex-end;
	font-family: 'TheGoodMonolith', sans-serif;
}
 .jorbelca-title {
	background-color: #F55050;
	color:white;
	position:absolute;
	top:100px;
	font-family: 'TheGoodMonolith', sans-serif;
	font-size: 3.2vw ;
	font-weight: 200;
	border-radius:50px;
	padding:10px 20px;
	box-shadow: 5px 10px 30px 10px;
	-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.jorbelca-title::after {
  content: "";
	border-radius:50px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.jorbelca-title:hover {
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.25, 1.25);
}

.jorbelca-title:hover::after {
    opacity: 1;
}
.title {
	padding-bottom: 20px;
	font: bold 3vw 'TheGoodMonolith', sans-serif;
}
.title h1{
	display: flex;
	flex-direction: row;
}
.characters{
	color:  #F55050;;
	font-weight: bold;
}
.form{
	width:100%
}
form{
	display: flex;
	flex-direction: column;
	align-items: center;
}
form input{
	width: 80%;
	accent-color: #F55050;
}
.options{
	display:flex;
	flex-direction: row;
	justify-content: space-evenly;
	width:400px;
	padding-bottom:20px;
	font-family: 'TheGoodMonolith', sans-serif;
}
.options div{
	display:flex
}
.options div label{
	padding-left: 10px;
}
.copy-icon{
	width: 60px;
	height: 60px;
	
}
Footer{
	position: absolute;
	height: 100px;
	width: 150px;
	bottom:0;
	display:flex;
	justify-content:center;
	align-items:center;
}




@media (max-width:600px) {
	.title h1{
		display:flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>






