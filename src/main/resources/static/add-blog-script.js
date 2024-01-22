document.addEventListener("DOMContentLoaded", function () {
    const addBlogForm = document.getElementById("add-blog-form");

    addBlogForm.addEventListener("submit", function (event) {
        event.preventDefault();


        const title = document.getElementById("blog-title").value;
        const date = document.getElementById("blog-date").value;
        const content = document.getElementById("blog-content").value;
        const image = document.getElementById("blog-image").value;


        const newBlogPost = {
            title,
            date,
            content,
            image,
        };


        displayNewBlogPost(newBlogPost);


        addBlogForm.reset();
    });

    function displayNewBlogPost(blog) {
        const blogContent = document.querySelector(".content");


        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.date}</p>
            <p>${blog.content}</p>
            <img src="${blog.image}" alt="${blog.title}">
        `;


        blogContent.appendChild(article);
    }
});
