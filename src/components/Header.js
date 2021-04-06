import Component from "../core/Component.js";

export default class Header extends Component {
    getExternalData () {
        console.log("get")
    }

    setup () {
        console.log("setup")
    }

    template() {
        setTimeout(() => {
            console.log(this.props.resultAPI)
        }, 500);
        
        console.log("template",this.props.zumApiItems)
        //${this.state.json[0].map( idx => )}
        return `
        <top>
            <div class="logo">JxxH ZUM</div>
        </top>
        <ul>
            <li>menu</li>
        </ul>
        `;
    }
    mounted() {
        console.log("mounted")
    }

}