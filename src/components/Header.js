import Component from "../core/Component.js";

export default class Header extends Component {
    setup () {
        console.log("setup")
    }

    template() {
        
        //${this.state.json[0].map( idx => )}
        return `
        <top>
            <div class="logo">JxxH ZUM</div>
        </top>
        <ul>
            <li><a id="home">home</a></li>
            <li><a id="food" >food</a></li>
            <li><a id="ranking" >ranking</a></li>
        </ul>
        `;
    }

    mounted() {
        // const food = this.target.querySelector('[data-component="header"]');

        // new Food(food, {
        //     addItem: addItem.bind(this), //props로 넘겨줌
        //  })

        // const home = document.querySelector('#home');
        // const food = document.querySelector('#food');
        // const ranking = document.querySelector('#ranking');
        // home.addEventListener('click', () => {
        //     pagePush('home');
        // });
        // food.addEventListener('click', () => {
        //     pagePush('food');
        // });
        // ranking.addEventListener('click', () => {
        //     pagePush('ranking');
        // });
    }
    
  setEvent() {
    const { pagePush } = this.props;

    this.addEvent('click', '#home', ({target}) => {
        pagePush('home');
    });
    this.addEvent('click', '#food', ({target}) => {
        pagePush('food');
    });
    this.addEvent('click', '#ranking', ({target}) => {
        pagePush('ranking');
    });

  }

}