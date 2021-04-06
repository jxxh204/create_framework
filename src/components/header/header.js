import Component from "../../core/Component.js";

export default class Header extends Component {

    setup () {
        this.state = {
            menus : []
        }
    }
    // ${this.state.menus[0].map(({name}) => {
    //     `<li><a id=${name}>${name}</a></li>`
    // })}
    template() {
        console.log("template",this.zumapi)
        //${this.state.json[0].map( idx => )}
        return `
        <top>
            <div class="logo">JxxH ZUM</div>
        </top>
        <ul id="menu">
            <li><a id="home">HOME</a></li>
            <li><a id="life">라이프</a></li>
            <li><a id="food">푸드</a></li>
            <li><a id="traval">여행</a></li>
            <li><a id="culture">컬쳐</a></li>
            <li><a id="favorites">즐겨찾기</a></li>
        </ul>
        `;
    }

    mounted() {

    }
    
  setEvent() {
    const { pagePush } = this.props;

    this.addEvent('click', '#home', ({target}) => {
        pagePush('home');
    });
    this.addEvent('click', '#life', ({target}) => {
        pagePush('life');
    });

    this.addEvent('click', '#food', ({target}) => {
        pagePush('food');
    });
  }

}