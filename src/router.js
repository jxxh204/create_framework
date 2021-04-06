export default class Router {
    nowPage = '';
  
    constructor({ pages }) {
      // this.app = this.target.querySelector('[data-component="body"]');
      this.app = document.getElementById('body');
      // this.app = 'http://localhost:8080/#App'

      window.onhashchange = () => {
        this.pages = pages;
        this.nowPage = window.location.hash.replace('#', '');
        const page = this.pages.find((page) => page.path === this.nowPage); 
        // find : page.path === this.nowPage를 만족하는 제일 첫번째 값을 가져온다.
        const Page = page.page;
        const currentPage = new Page({ router: this });
        this.app.innerHTML = ''; // 현재 페이지를 비워주고.
        this.app.innerHTML += currentPage.template(); // 현재 페이지를 넣어준다.
        console.log(this.app.innerHTML)
        currentPage.mounted();
      };
    }
}