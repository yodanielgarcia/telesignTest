
const api_key = 'e4208d5c'
const url = 'http://www.omdbapi.com/?apikey='+ api_key +'&'

export default {
    async getRequest (parameter = null) {
        return await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=a9b856b302ef45f0fc28033e35b71d6a"
          )
            .then((response) => response.json())
            .then((movie) => {
              return movie.results;
            }).catch(e => {
            console.log(e, "error");
            
        })
    },

    async getGenere (parameter = null) {
      return await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=a9b856b302ef45f0fc28033e35b71d6a"
        )
          .then((response) => response.json())
          .then((movie) => {
            return movie.results;
          }).catch(e => {
          console.log(e, "error");
          
      })
  }
}