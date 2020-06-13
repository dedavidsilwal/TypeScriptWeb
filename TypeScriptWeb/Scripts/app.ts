import { Search } from './search';
import { FetchHttpService } from './httpservice';


window.onload = () => {

    let clickmebtton = document.getElementById("button");

    let resultElement = <HTMLElement>document.querySelector('.result');

    let search = new Search(new FetchHttpService());


    clickmebtton.onclick = async () => {

        const result = await search.search();

        resultElement.innerHTML = result.toString();     

        console.log('clicked');

    }

}