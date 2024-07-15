import "fs"
import "path"
import * as path from "path";
import * as fs from "fs";

// list the content directory for markdown files
const files = fs.readdirSync("public/content/posts")

// filter markdown files
const markdownFiles = files.filter(file => path.extname(file) === ".md")

// postData
const postData = []

// create a page for each markdown file
markdownFiles.forEach((file, index) => {
    let fileContent = fs.readFileSync(`public/content/posts/${file}`, "utf-8")
    let metaData = fileContent.split("---")[1]
    let metaDataArray = metaData.split("\n")
    let title = metaDataArray[1].split(": ")[1]
    let date = metaDataArray[2].split(": ")[1]
    let tags = metaDataArray[3].split(": ")[1]
    let description = metaDataArray[4].split(": ")[1]
    // let archived = metaDataArray[5].split(": ")[1]
    // remove metaData from fileContent
    // fileContent = fileContent.split("---").slice(2).join("---").trim()
    // create slug
    let slug = file.replace(".md", "")
    // push to postData
    // if (archived === "false") {
        postData.push({title, date, tags, description, slug})
    // }
    if (index + 1 === markdownFiles.length) {
        fs.writeFileSync("src/data/posts.json", JSON.stringify(postData))
    }
})
// order by date

// postData.sort((a, b) => {
//     return new Date(b.date) - new Date(a.date)
// })
