import Component from "../../core/Component.js";

let saveApi;
export default class Life extends Component {

    setup(props) {
        this.state = {
            zumContents : []
        }
  
        if (props) {
            this.setState({zumContents : props.zumApi[1].contents[0]})
        }
    }
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
    template() {
        let image = '';
        if (this.props) {
            saveApi  = this.props.zumApi[1].contents[0];
        }
            return `
            <div id="life">
                <div id="mainScreen">라이프</div>
                <div class="container">
                    <div class="item">
                        <img src=${saveApi.imageUrl} />
                        <h4>${saveApi.title}<h4/>
                        <p>${this.textLengthOverCut(saveApi.summaryContent, 60, '...')}</p>
                        <p>${saveApi.mediaName}<p/>
                    </div>
                </div>
            </div>
            `;
        
        // console.log(this.state.zumContents)

    }

    mounted() {
        // console.log(this.zumApi)
        // if (this.zumApi[1].contents) console.log(this.zumApi[1].contents)

        // console.log(this.zumApi[1].contents[0])
        // console.log(this.zumApi[1].contents[0].imageUrl)
    }
}
