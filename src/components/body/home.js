import Component from "../../core/Component.js";

//menu
import Life from '../../components/body/life.js';
import Food from '../../components/body/food.js';

import Router from '../../router.js';

export default class Home extends Component {
    first () {
        new Router({ pages });
    }
    template() {
        return `
            <div id="mainScreen">HOME</div>
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

const pages = [ //router page

    { page: Home, path: 'home'},
    { page: Life, path: 'life' },
    { page: Food, path: 'food' },
    // { page: Traval, path: 'traval'},
    // { page: Culture, path: 'culture'},
    // { page: Favorites, path: 'favorites'},
];