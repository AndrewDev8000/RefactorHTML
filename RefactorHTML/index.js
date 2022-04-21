const posts = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const postContainer = document.getElementById("post-container");
    const postArr = [];

    for(i = 0; i < 6; i++) {
        let user = data[i*10].userId;
        let id = data[i*10].id;
        let title = data[i*10].title;
        let body = data[i*10].body;

        const string = 
        `<div class='post-wrapper' id="post${i}">
            <h2 class='text title'>${title}</h2>
            <p class='text body'>${body}</p>
            <p class='text info'>user: ${user}, id: ${id}</p>
        </div>`;

        postArr.push(string);
    }

    for(i = 0; i < 6; i++) {
        postContainer.innerHTML += postArr[i];
    }

    return postArr;
});

const postsWPhoto = fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {

    for(i = 0; i < 6; i++) {
        let img = data[i*10].url;
        console.log(img);

        const div = document.createElement("div");
        const string = 
        `<img src="${img}" alt="photo">`;

        div.innerHTML += string;


        const parentElement = document.getElementById(`post${i}`);
        console.log(parentElement);
        

        parentElement.insertBefore(div, parentElement.children[1]);
    }

    return;
});
console.log("ha");



