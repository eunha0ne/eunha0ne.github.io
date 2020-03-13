const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/eunha0ne/eunha0ne.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
