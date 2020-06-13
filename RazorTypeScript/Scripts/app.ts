window.onload = () => {
    let clickmebtton = document.getElementById("button");

    clickmebtton.onclick = () => 

        fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
            document.getElementById("ts-example").innerHTML = res.json().toString();
        })

        console.log('clicked');

}


