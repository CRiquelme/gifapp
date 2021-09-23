export const getGifs = async ( category ) => {
    const API = 'BXT8ZERQxuAJ0nUGET0dFQlVYLr35fQr';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${API}`
    const resp = await fetch(url)
    const { data } = await resp.json()
    
    const gifs = data.map(img => {
      const { id, title, images } = img;
      return {
        id: id,
        title: title,
        url: images?.downsized_medium.url
      }
    })
    return gifs;
  }