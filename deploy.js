const ghp = require('gh-pages')

ghp.publish("public", {
    branch: 'master',
    repo: `https://${process.env.GH_TOKEN}@github.com/zedd-dev/www.git`,
    user: {
        name: "gh-pages",
        email: "ghpages@zedd.dev"
    },
    message: `Generated by ${process.env.GITHUB_REPOSITORY}@${process.env.GITHUB_SHA}`
}, err => {
    if (err) {
        console.error(err)
        process.exit(255)
    }
})