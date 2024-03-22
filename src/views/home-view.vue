<template>
    <div>
        <div>
            <h1> Hello Vue developer!!</h1>
        </div>
        <div>
            Kilometers : <input type="text" v-model="kilometers">
            Meters : <input type="text" v-model="meters">
        </div>
        <div id="databinding">
            {{ title }}<br />
            <a href="hreflink" target="_blank"> Click Me1 </a> <br />
            <a href="{{hreflink}}" target="_blank">Click Me2 </a> <br />
            <a v-bind:href="hreflink" target="_blank">Click Me3 </a> <br />
            <div v-bind:class="{ active: isactive }"><b>{{ title }}</b></div>
        </div>
        <div id="databinding">
            <h3>Radio</h3>
            <input type="radio" id="black" value="Black" v-model="picked">Black
            <input type="radio" id="white" value="White" v-model="picked">White
            <h3>Radio element clicked : {{ picked }} </h3>
            <hr />
            <h3>Select</h3>
            <select v-model="languages">
                <option disabled value="">Please select one</option>
                <option>Vue</option>
                <option>Java</option>
                <option>Javascript</option>
                <option>Php</option>
                <option>C</option>
                <option>C++</option>
            </select>
            <h3>Languages Selected is : {{ languages }}</h3>
            <hr />
        </div>
        <div>
            <button v-on:click.once="buttonclickedonce" v-bind:style="styleobj">Click Once
            </button>
            Output:{{ clicknum }}
            <br /><br />

            <button v-on:click="buttonclicked" v-bind:style="styleobj">Click Me</button>
            Output:{{ clicknum1 }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

            kilometers: 0,
            meters: 0,
            title: "DATA BINDING",
            hreflink: "http://www.google.com",
            isactive: true,
            picked: 'White',
            languages: "Vue", clicknum: 0,
            clicknum1: 0,
            styleobj: {
                backgroundColor: '#2196F3!important',
                cursor: 'pointer',
                padding: '8px 16px',
                verticalAlign: 'middle',
            }
        };
    },
    methods: {
        buttonclickedonce: function () {
            this.clicknum++;
        },
        buttonclicked: function () {
            this.clicknum1++;
        }
    },
    watch: {
        kilometers: function (val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters: function (val) {
            this.kilometers = val / 1000;
            this.meters = val;
        }
    }
};
</script>

<style scoped>
.active {
    background: red;
}
</style>