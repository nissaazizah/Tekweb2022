let apiUrl = "https://myapi.nissazizah.my.id/index.php/";
<<<<<<< HEAD

=======
>>>>>>> 97dea154ad6ac08291ef80c2618c4f3e08509cd7
let app = Vue.createApp({
    data() {
      return {
        articles: {},
        foto : "https://raw.githubusercontent.com/nissaazizah/tekweb2022/main/assets/Group%203.png"
      }
    },
    methods: {
      getArticleData() {
        axios
<<<<<<< HEAD
          .get(apiUrl+"users/1")
=======
          .get( apiUrl+"users/1")
>>>>>>> 97dea154ad6ac08291ef80c2618c4f3e08509cd7
          .then((res) => {
            this.articles = res.data;
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getArticleData()
    }
  })
  app.mount('#app');