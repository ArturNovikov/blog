vercel link: https://blog-rmqm8h57m-arturnovikov.vercel.app/

blog/
├── husky/
│ │ ├── _
│ │ │ ├── .gitignore
│ │ │ └── husky.sh
│ └── pre-commit
├── node_modules/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ ├── fonts/
│ │ │ ├── fonts.scss
│ │ │ └── ...
│ │ ├── images/
│ │ │ ├── cat-solid.svg
│ │ │ ├── heart 1.svg
│ │ │ ├── red-heart 1.svg
│ │ │ └── skull-crossbones-solid.svg
│ ├── components/
│ │ ├── App/
│ │ │ ├── App.js
│ │ │ ├── App.module.scss
│ │ │ └── index.js
│ │ ├── Article/
│ │ │ ├── article.js
│ │ │ ├── article.module.scss
│ │ │ └── index.js
│ │ │ ├── ArticleAuthor/
│ │ │ │ ├── articleAuthor.js
│ │ │ │ ├── articleAuthor.module.scss
│ │ │ │ └── index.js
│ │ │ ├── ArticleContent/
│ │ │ │ ├── articleContent.js
│ │ │ │ ├── articleContent.module.scss
│ │ │ │ └── index.js
│ │ │ ├── ArticleHeader/
│ │ │ │ ├── articleHeader.js
│ │ │ │ ├── articleHeader.module.scss
│ │ │ │ └── index.js
│ │ │ ├── ArticlesList/
│ │ │ │ ├── articlesList.js
│ │ │ │ ├── articlesList.module.scss
│ │ │ │ └── index.js
│ │ │ ├── ArticleTagList/
│ │ │ │ ├── articleTagList.js
│ │ │ │ ├── articleTagList.module.scss
│ │ │ │ └── index.js
│ │ ├── Header/
│ │ │ ├── header.js
│ │ │ ├── header.module.scss
│ │ │ └── index.js
│ │ │ ├── Layout/
│ │ │ │ ├── layout.js
│ │ │ │ ├── layout.module.scss
│ │ │ │ └── index.js
│ │ │ ├── LikeIcon/
│ │ │ │ ├── likeIcon.js
│ │ │ │ ├── likeIcon.module.scss
│ │ │ │ └── index.js
│ ├── pages/
│ │ ├── ArticleItem/
│ │ │ ├── articleItem.js
│ │ │ ├── articleItem.module.scss
│ │ │ └── index.js
│ │ ├── DesktopSignIn/
│ │ │ ├── desktopSignIn.js
│ │ │ ├── signIn.module.scss
│ │ │ ├── index.js
│ │ │ └── singIn.js
│ │ ├── DesktopSignUp/
│ │ │ ├── desktopSignUp.js
│ │ │ ├── signUp.module.scss
│ │ │ ├── index.js
│ │ │ └── signUp.js
│ │ ├── DesktopUpdateUser/
│ │ │ ├── desktopUpdateUser.js
│ │ │ ├── desktopUpdateUser.module.scss
│ │ │ ├── index.js
│ │ │ └── update.js
│ │ ├── NewArticleCreate/
│ │ │ ├── newArticleCreate.js
│ │ │ ├── newArticleCreate.module.scss
│ │ │ └── index.js
│ ├── services/
│ │ ├── AuthProvider.js
│ │ └── apiService.js
│ ├── store/
│ │ ├── actionCreators
│ │ │ ├── fetchArticleGlobally.js'
│ │ │ ├── fetchCreateArticleRequest.js
│ │ │ ├── fetchDeleteArticle.js
│ │ │ ├── fetchEditArticle.js
│ │ │ ├── fetchLoginUser.js
│ │ │ ├── fetchRegisterUser.js
│ │ │ ├── fetchUpdateUser.js
│ │ │ ├── setCreatedStatus.js
│ │ │ ├── setIsAuthorized.js
│ │ │ ├── setIsUserAuthor.js
│ │ │ ├── setLikeArticle.js
│ │ │ ├── setUserImage.js
│ │ │ └── setUserName.js
│ │ ├── actions
│ │ │ └── types.js
│ │ ├── reducers
│ │ │ ├── articlesReducer.js
│ │ │ ├── createArticleReducer.js
│ │ │ ├── deleteArticleReducer.js
│ │ │ ├── editArticleReducer.js
│ │ │ ├── index.js
│ │ │ ├── isAuthorisedReducer.js
│ │ │ ├── loginReducer.js
│ │ │ ├── setCreatedStatusReducer.js
│ │ │ ├── setUserAuthorReducer.js
│ │ │ ├── setLikeArticleReducer.js
│ │ │ ├── setUserImage.js
│ │ │ ├── setUserNameReducer.js
│ │ │ ├── userRequestReducer.js
│ │ │ └── userUpdateReducer.js
│ │ ├── store.js
│ ├── styles/
│ │ └── global.scss
│ ├── utils/
│ │ ├── configSettings.js
│ │ ├── formatDate.js
│ │ └── truncateText.js
│ ├── index.js
│ └── index.scss
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .babel.config.js
├── package-lock.json
├── package.json
└── README.md
