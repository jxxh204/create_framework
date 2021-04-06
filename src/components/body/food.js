import Component from "../../core/Component.js";

export default class Food extends Component {
    template() {
        return `
            <div id="mainScreen">푸드</div>
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
