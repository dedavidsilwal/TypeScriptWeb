import { Search } from './search';
import { FetchHttpService } from './httpservice';


let clickmebtton = document.getElementById("button");

let resultElement = <HTMLElement>document.querySelector('.result');

let search = new Search(new FetchHttpService());


clickmebtton.onclick = async () => {

    const result = await search.search();

    resultElement.innerHTML = result.toString();

    console.log('clicked');

}