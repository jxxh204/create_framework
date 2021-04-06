import Component from "../../core/Component.js";
export default class Header extends Component {

    setup () {
        this.state = {
            menus : []
        }
    }

    template() {
        console.log("template",this.zumapi[0],this.zumapi)
        let menu = []
         this.zumapi.map((currentValue,idx) => {
            menu.push(`
                <li><a id=${currentValue.id}>${currentValue.menu}</a></li>
            `);
        })
        return `

        <top>
            <div class="logo">JxxH ZUM</div>
        </top>
        <div id="line"></div>
        <ul id="menu">
            ${menu.join('')}
        </ul>
        <div id="line"></div>
        `;
    }
    // <li><a id="home">HOME</a></li>
    // <li><a id="life">라이프</a></li>
    // <li><a id="food">푸드</a></li>
    // <li><a id="traval">여행</a></li>
    // <li><a id="culture">컬쳐</a></li>
    // <li><a id="favorites">즐겨찾기</a></li>
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