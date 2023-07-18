
- #BUG1: APP.JS There is  an extra module.exports = app
- #BUG2: routes/users.js: Missing "requireLogin" from the parameter in router.delete
- #BUG3: routes/auth.js: Missing jwt for token. This allows secret key from user to be used and access correct login