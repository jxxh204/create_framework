import Component from "../../core/Component.js";

export default class Home extends Component {

    template() {
        console.log("home",this.props)
        return `
            <div class="home" id="mainScreen">HOME</div>
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