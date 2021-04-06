import Component from "./core/Component.js";
import styles from "./css/App.css"

import Footer from "./components/footer.js";
import Home from "./components/body/home.js"
import Header from "./components/header/header.js"

//menu

export default class App extends Component {
  setup () {
    this.state = {
      isFilter: 0,
    //   menus: [],
      items: [
        {
          seq: 1,
          contents: 'item1',
          active: false,
        },
        {
          seq: 2,
          contents: 'item2',
          active: true,
        }
      ]
    };
  }

  template () {//mounted에서 data-component를 끌어다쓴다.
    return `
       <header data-component="header"></header>
       <main data-component="home" id="body"></main>
       <footer data-component="footer"></footer>
    `;
  }

  // mounted에서 자식 컴포넌트를 마운트 해줘야 한다.
  mounted () {
    const { filteredItems, addItem, deleteItem, toggleItem, filterItem, pagePush } = this;
    const header = this.target.querySelector('[data-component="header"]');
    const home = this.target.querySelector('[data-component="home"]');
    const footer = this.target.querySelector('[data-component="footer"]');

    // 하나의 객체에서 사용하는 메소드를 넘겨줄 bind를 사용하여 this를 변경하거나,
    // 다음과 같이 새로운 함수를 만들어줘야 한다.
    // ex) { addItem: contents => addItem(contents) }
    new Header(header, {
        addItem: addItem.bind(this), //props로 넘겨줌
        pagePush: pagePush.bind(this)
     })
    new Home(home, {
      filteredItems,
      deleteItem: deleteItem.bind(this),
      toggleItem: toggleItem.bind(this),
    });
    new Footer(footer, {
      filterItem: filterItem.bind(this)
    });
    console.log('mounted')
  }

  get filteredItems () {
    const { isFilter, items } = this.state;
    return items.filter(({ active }) => (isFilter === 1 && active) ||
      (isFilter === 2 && !active) ||
      isFilter === 0);
  }

  //함수를 명시하여 컴포넌트를 사용할 때에는 this.addItem(...)으로 사용한다.
  addItem (contents) {
    const {items} = this.state;
    const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
    const active = false;
    this.setState({
      items: [
        ...items,
        {seq, contents, active}
      ]
    });
  }

  deleteItem (seq) {
    const items = [ ...this.state.items ];;
    items.splice(items.findIndex(v => v.seq === seq), 1);
    this.setState({items});
  }

  toggleItem (seq) {
    const items = [ ...this.state.items ];
    const index = items.findIndex(v => v.seq === seq);
    items[index].active = !items[index].active;
    this.setState({items});
  }

  filterItem (isFilter) {
    this.setState({ isFilter });
  }
  pagePush(pageName) {
    window.location.hash = pageName;
  }
}