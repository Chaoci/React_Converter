const ghpages = require('gh-pages');

// 專案根目錄設定
ghpages.publish(
  'build', // 要部署的資料夾
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Chaoci/React_Converter.git', // GitHub repository 的連結
    user: {
      name: 'Chaoci', // 你的名字
      email: 'charlieischao@gmail.com', // 你的 email
    },
  },
  () => {
    console.log('部署完成！');
  }
);