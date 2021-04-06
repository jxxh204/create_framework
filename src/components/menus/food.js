import Component from "../../core/Component.js";

export default class Food extends Component {
    template() {
        return `
        <ul>
            <button class="move">go ranking</button>
        </ul>
        `;
    }
    mounte() {
        // console.log(this.router)
        // const button = document.querySelector('.move');
        // button.addEventListener('click', () => {
        //     window.location.hash = 'ranking'
        // });
      }
}
