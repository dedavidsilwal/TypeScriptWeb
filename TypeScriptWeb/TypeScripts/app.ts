import { Search } from './search';
import { FetchHttpService } from './httpservice';

window.onload = () => {

    let clickmebtton = document.getElementById("button");

    let result = <HTMLElement>document.querySelector('.result');

    let search = new Search(new FetchHttpService());

    clickmebtton.onclick = () =>
        search.search().then(res => {
            debugger;
            result.innerHTML = res.toString();
        });

        console.log('clicked');

}

