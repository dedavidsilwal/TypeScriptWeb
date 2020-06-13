let clickmebtton = document.getElementById("button");

clickmebtton.onclick = async () => {

    var result = await getResult();

    document.getElementById("ts-example").innerHTML = result;


    function getResult(): Promise<string> {
        return fetch('https://jsonplaceholder.typicode.com/posts/1').then(result => result.json().toString());

    }

    console.log('clicked');
}

    