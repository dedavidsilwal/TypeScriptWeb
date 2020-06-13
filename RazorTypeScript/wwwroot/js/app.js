window.onload = function () {
    var clickmebtton = document.getElementById("button");
    clickmebtton.onclick = function () {
        return fetch('https://jsonplaceholder.typicode.com/posts/1').then(function (res) {
            document.getElementById("ts-example").innerHTML = res.json().toString();
        });
    };
    console.log('clicked');
};
//# sourceMappingURL=app.js.map