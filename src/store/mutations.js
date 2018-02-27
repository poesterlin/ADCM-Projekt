module.exports = {
  error(state, cause) {
    state.apiState.error = cause;
  },

  clearError(state) {
    state.apiState.error = null;
  },
  success(state, cause) {
    state.apiState.success = cause;
  },

  clearSuccess(state) {
    state.apiState.success = "";
  },

  loading(state, status) {
    state.apiState.loading = status;
  },

  news(state, news) {
    news.forEach(element => {
      if (element.image) {
        element.image = state.settings.serverIp + "/" + element.image;
      }
      delete element._id;
    });
    if (state.route.path !== "/admin") {
      news = news.filter(n => state.route.path === "/" + n.type);
    }
    state.news = news.reverse();
  },
  newsEdit(state, id) {
    var editObj = state.news.find(art => {
      return art.articleId === id;
    });
    state.edit.title = editObj.title;
    state.edit.body = editObj.body;
    state.edit.id = id;
  },
  closeEdit(state) {
    state.edit.id = null;
    state.edit.title = null;
    state.edit.body = null;
  },
  name(state, val) {
    state.auth.name = val;
  },
  pw(state, val) {
    state.auth.pw = val;
  },
  token(state, val) {
    state.auth.token = val;
    state.auth.isLoggedIn = true;
  },
  cookie(state, obj) {
    if (obj && obj.token && obj.name) {
      state.auth.token = obj.token;
      state.auth.name = obj.name;
      state.auth.isLoggedIn = true;
    } else {
      state.auth.token = null;
      state.auth.name = null;
      state.auth.isLoggedIn = false;
    }
  },
  body(state, val) {
    state.newPost.body = val;
  },
  title(state, val) {
    state.newPost.title = val;
  },
  setType(state, val) {
    state.newPost.type = val;
  },
  editBody(state, val) {
    state.edit.body = val;
  },
  editTitle(state, val) {
    state.edit.title = val;
  },
  setTheme: (state, val) => {
    state.general.theme = val;
  }
};
