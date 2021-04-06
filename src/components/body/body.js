import Component from "../../core/Component.js";

//menu
import Home from "../../components/menus/home.js";
import Food from '../../components/menus/food.js';
import Life from '../../components/menus/life.js';

import Router from '../../router.js';

const pages = [ //router page

    { page: Home, path: 'home'},
    { page: Life, path: 'life' },
    { page: Food, path: 'food' },
    // { page: Traval, path: 'traval'},
    // { page: Culture, path: 'culture'},
    // { page: Favorites, path: 'favorites'},
];

export default class Body extends Component {
    first () {
        new Router({ pages });
    }
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
