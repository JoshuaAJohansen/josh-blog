// import posts from './_posts.js';

// const contents = JSON.stringify(posts.map(post => {
// 	return {
// 		title: post.title,
// 		slug: post.slug
// 	};
// }));

// export function get(req, res) {
// 	res.writeHead(200, {
// 		'Content-Type': 'application/json'
// 	});

// 	res.end(contents);
// }

  // src/routes/blog/index.json.js

  import fs from "fs";
  import path from "path";
  import grayMatter from "gray-matter";

  const getAllPosts = () =>
    fs.readdirSync("content").map(fileName => {
      const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
      return grayMatter(post).data;
    });

  export function get(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const posts = getAllPosts();
    res.end(JSON.stringify(posts));
  }