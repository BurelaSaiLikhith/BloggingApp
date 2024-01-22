const blogPosts = [
    {
        title: "Dussehra Offers Bonanza",
        date: "Published on October 14, 2023",
        content: "From today, the Dussehra Sale has started. Quickly grab your chance over exclusive offers and start shopping.",
        image: "/images/1.jpg",
        url: "https://www.amazon.in/dussehra-sale/s?k=dussehra+sale",
    },
    {
        title: "Navratri Days",
        date: "Published on October 15, 2023",
        content: "Today is the starting day of Navratri celebrations.",
        image: "/images/2.jpg",
        url: "https://timesofindia.indiatimes.com/life-style/food-news/navratri-2023-dates-tithi-muhurat-and-what-to-offer-to-each-goddess/articleshow/104433164.cms?from=mdr",
    },
    {
        title: "Movie Festo",
        date: "Published on October 16, 2023",
        content: "This week is the celebration time for movie lovers as the big-range movies like LEO, Bhagavant Kesari, and Tiger Nageswar Rao are releasing.",
        image: "/images/3.jpeg",
        url: "https://www.deccanchronicle.com/entertainment/tollywood/141023/telugu-movies-releasing-for-dasara.html",
    },
    {
        title: "Think With Niche",
        date: "Published on October 14 , 2023",
        content: "Discover the latest news, trends, and insights from the global startup ecosystem. From innovation stories to entrepreneurial journeys, Think With Niche brings you in-depth analysis and thought leadership in the world of startups. Join us to stay ahead in this dynamic business landscape. ",
        image: "/images/4.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5680779&q=site:https%3A%2F%2Fwww.thinkwithniche.com%2Ffeed-rss.xml",
    },
    {
        title: "Namaste UI",
        date: "Published on October 16, 2023",
        content: "Namaste UI is a technology blog from India covering topics on blogging, business, digital marketing, SEO, and finance. Increase your reach by guest blogging. With the help of Namaste UI's guest post services, reach your brand presence to a broader range of audience.",
        image: "/images/5.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5366672&q=site:https%3A%2F%2Fwww.namasteui.com%2Ffeed%2F",
    },
    {
        title: "Echoes of Indiana Avenue",
        date: "Published on October 16, 2023",
        content: "Narrated by musician Herman 'Butch' Slaughter and produced by Cultural Manifesto host Kyle Long, Echoes of Indiana Avenue is a weekly audio documentary from WFYI. Each episode focuses on the cultural achievements of Black artists and musicians from central Indiana. Explore the cultural achievements of Black artists and musicians from central Indiana.",
        image: "/images/6.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5263496&q=site:https%3A%2F%2Fwww.wfyi.org%2Fprograms%2Fechoes-indiana-avenue%2Fradio%2Frss",
    },
    {
        title: "Indy's Child Parenting Magazine",
        date: "Published on October 16, 2023",
        content: "Indy's Child Parenting Magazine is a local and nationally award-winning parenting magazine. Discover the latest local to-dos or parenting support how-tos! Their mission is to educate, update and inform parents by providing them the tools, resources, events and contacts they need to make parenthood a little easier.",
        image: "/images/7.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4899556&q=site:https%3A%2F%2Findyschild.com%2Ffeed%2F",
    },
    {
        title: "Gadget Gram",
        date: "Published on October 16, 2023",
        content: "Get the latest scoop on new gadgets and reviews from our experts only on Gadget Gram. See all the upcoming consumer electronics with full specs, features, and launch dates.",
        image: "/images/8.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5087008&q=site:https%3A%2F%2Fwww.gadgetgram.com%2Ffeed%2F",
    },
    {
        title: "Colts Blue Zone Podcast",
        date: "Published on October 16, 2023",
        content: "Join FOX59/CBS4's Mike Chappell and Dave Griffiths weekly as they discuss everything Colts from game recaps, to trade rumors.",
        image: "/images/9.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5194462&q=site:https%3A%2F%2Frss.art19.com%2Fcolts-blue-zone-podcast",
    },
    {
        title: "Invest Karo India",
        date: "Published on October 16, 2023",
        content: "In depth insights into capital markets and how to create wealth over time. Read Invest Karo India, by Tar, a Substack publication with tens of thousands of readers. Free in-depth research into various investing trends. I write cause it helps me think and understand these trends better in a disciplined manner.",
        image: "/images/10.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5293397&q=site:https%3A%2F%2Finvestkaroindia.substack.com%2Ffeed",
    },
    {
        title: "FLICKSIDE",
        date: "Published on October 16, 2023",
        content: "Find movie reviews, latest Indian movies, celebrity news and more at Flickside.",
        image: "/images/11.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4665944&q=site:https%3A%2F%2Fflickside.com%2Ffeed%2F",
    },
    {
        title: "Oh My Dog",
        date: "Published on October 16, 2023",
        content: "Covers articles on health, training, animal welfare and products & reviews. Oh My Dog! is a blog for all things dog and a community for those of us who share our lives with these darling, four-legged fur-balls.",
        image: "/images/12.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=1360947&q=site:https%3A%2F%2Fohmydogblog.com%2Ffeed%2F",
    },
    {
        title: "Search Darjeeling",
        date: "Published on October 16, 2023",
        content: "Search Darjeeling is a local blog from Darjeeling, a tiny yet beautiful hill destination of India in the state of West Bengal. The objective of this blog is to share information that could bring at least a small difference to its visitors.",
        image: "/images/13.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5665601&q=site:https%3A%2F%2Fwww.searchdarjeeling.com%2Ffeeds%2Fposts%2Fdefault",
    },
    {
        title: "11Wickets",
        date: "Published on October 16, 2023",
        content: "Welcome to the world of fantasy sports. Stay up-to-date with daily fantasy cricket, IPL fantasy cricket league, and fantasy football league news, tricks and strategies to play accordingly.",
        image: "/images/14.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5091776&q=site:https%3A%2F%2Fblog.11wickets.com%2Ffeed%2F",
    },
    {
        title: "Indy Homes Blog",
        date: "Published on October 16, 2023",
        content: "Indy Homes Real Estate Blog covers home and real estate trends, info on the Indianapolis real estate market, buying and selling tips, Indianapolis fun and events, and more.The mission of the Indy Homes Team is to provide the utmost in service to our clients, and to have fun in the process. Team includes listing agents, buyer's agents, showings assistants, listing specialists and transaction coordinators.",
        image: "/images/15.jpeg",
        url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5306368&q=site:http%3A%2F%2Ffeeds.sierrainteractive.com%2Frss.ashx%2F12%2F685",
    },


];

function createBlogArticle(post) {
    const article = document.createElement("article");
    article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.date}</p>
        <p>${post.content}</p>
        <img src="${post.image}" class="image" alt="${post.title}" /><br><br>
        <a href="${post.url}">Read More</a>
    `;
    return article;
}

function addBlogArticles() {
    const blogContent = document.getElementById("blog-content");
    blogPosts.forEach((post) => {
        const article = createBlogArticle(post);
        blogContent.appendChild(article);
    });
}
window.onload=addBlogArticles();
