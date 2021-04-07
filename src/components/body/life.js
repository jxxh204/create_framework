import Component from "../../core/Component.js";

let saveApi;
let contents = [];
export default class Life extends Component {

    setup(props) {

    }
    template() {
        if (this.props) {
            saveApi  = this.props.zumApi[1].contents;
            // saveApi  = this.props.zumApi[1]
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
            // console.log(contents.join(''))
        }
            return `
            <div id="life">
                <div id="mainScreen">라이프</div>
                <div class="container">
                ${contents.join('')}
                </div>
            </div>
            `;
    }
}
