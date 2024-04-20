<template>
    <form action="">
        <div>
            <div style="padding-top: 30px; padding-left: 30px;">
                <h4>Account Details</h4>
            </div>
            <div>
                <label for='answer'>What is the English translation of
                    <strong>{{ wordA }}
                    </strong>?
                </label>
                <input type="text" v-model="answer">
                <p v-if="answer != ''">You Answered: {{ answer }}</p>
                <button v-on:click="checkAnswer()">Check Answer!</button>
                <div v-if="showFeedback">
                    <p v-if="correct" class="correct"> You got it! </p>
                    <p v-else class="incorrect"> Sorry, Please try again!</p>
                </div>
                <input type='checkbox' id='showHint' v-model='showHint' class="checkbox">
                <label for='showHint'>Show hint?</label>

                <div v-if='showHint'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <input type='checkbox' id='greetings' value='greetings' v-model='categories' class="checkbox">
                <label for='greetings'>Greetings</label>

                <input type='checkbox' id='colors' value='colors' v-model='categories' class="checkbox">
                <label for='colors'>Colors</label>

                <input type='checkbox' id='verbs' value='verbs' v-model='categories' class="checkbox">
                <label for='verbs'>Verbs</label>
                <select v-model='level'>
                    <option value='easy'>Easy</option>
                    <option value='moderate'>Moderate</option>
                    <option value='difficult'>Difficult</option>
                </select>
                <div>
                    First name: <input type='text' v-model='firstName'>
                    Last name: <input type='text' v-model='lastName'>

                    <p>Hello {{ fullName }}</p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            level: 'easy',
            showHint: true,
            categories: ['greetings', 'verbs'],
            // 
            answer: '',
            wordA: 'hola',
            wordB: 'hello',
            correct: null,
            showFeedback: false,
            // 
            firstName: '',
            lastName: '',
            // 
            spanishWords: ['hola', 'adios', 'uno', 'dos'],
        }
    },
    methods: {
        checkAnswer() {
            this.correct = this.wordB == this.answer;
            this.showFeedback = true;

        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        shortWords() {
            return this.spanishWords.filter(value => value.length <= 3)
        }
    }
}
</script>

<style scoped>
.checkbox {
    width: 20px;
    height: 20px;

}

label {
    display: block;
}

input,
button {
    display: block;
    margin: 10px 0px;
    width: 30%;
}

.correct {
    color: green;
}

.incorrect {
    color: red;
}

form {
    width: 100%;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
}
</style>