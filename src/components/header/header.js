import Component from "../../core/Component.js";
import Home from "../body/home.js";
import Life from "../body/life.js";
import Food from "../body/food.js";
import Traval from "../body/traval.js";
import Culture from "../body/culture.js";
export default class Header extends Component {

    setup () {
    }

    template() {
        console.log(this.zumApi)
        let menu = []
         this.zumMenu.map((currentValue,idx) => {
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
    textLengthOverCut(txt, len, lastTxt) {
        if (len == "" || len == null) { // 기본값
            len = 20;
        }
        if (lastTxt == "" || lastTxt == null) { // 기본값
            lastTxt = "...";
        }
        if (txt.length > len) {
            txt = txt.substr(0, len) + lastTxt;
        }
        return txt;
    }

    mounted() {
        const {zumApi,textLengthOverCut} = this;

        const home = document.getElementsByClassName('home');
        const life = document.getElementsByClassName('life');
        const food = document.getElementsByClassName('food');
        const traval = document.getElementsByClassName('traval');
        const culture = document.getElementsByClassName('culture');
            console.log(window.location)
        new Home(home, {
            zumApi
        });
    
        new Life(life, {
            zumApi,
            textLengthOverCut : textLengthOverCut.bind(this)
        });
    
        new Food(food, {
            zumApi,
            textLengthOverCut : textLengthOverCut.bind(this)
        });
    
        new Traval(traval, {
            zumApi,
            textLengthOverCut : textLengthOverCut.bind(this)
        });
        
        new Culture(culture, {
            zumApi,
            textLengthOverCut : textLengthOverCut.bind(this)
        });
    
  
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
    this.addEvent('click', '#traval', ({target}) => {
        pagePush('traval');
    });

    this.addEvent('click', '#culture', ({target}) => {
        pagePush('culture');
    });
    return false;
  }

}