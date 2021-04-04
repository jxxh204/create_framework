import Component from "../core/Component.js";

export default class Header extends Component {

    template() {
        console.log(this.props)
        return `
        <ul>
        </ul>
        `;
    }

}