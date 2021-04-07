import Component from "../../core/Component.js";

let saveApi;
let contents = [];
export default class Food extends Component {

    setup(props) {

    }
    template() {
        if (this.props) {
            saveApi  = this.props.zumApi[2].contents;
            saveApi.map((currentValue,idx) => {
                contents.push(`
                <div class="item">
                    <img src=${currentValue.imageUrl} />
                    <h4>${currentValue.title}<h4/>
                    <p>${this.props.textLengthOverCut(currentValue.summaryContent, 60, '...')}</p>
                    <p>${currentValue.mediaName}<p/>
                </div>
                `);
            })
        }
            return `
            <div id="food">
                <div id="mainScreen">푸드</div>
                <div class="container">
                ${contents.join('')}
                </div>
            </div>
            `;
    }
}
