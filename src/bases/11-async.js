const getImage = async () => {
  try {
    const API_KEY = 'DEVhlzPyI6xRxftVdfzJiv9ZjjQdauPd';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await res.json();  
    return data.images.original.url;
  } catch (error) {
    // manejo error
  } 
};


getImage()
  .then(url => {
    const img = document.createElement('img');
    img.src = url;
    
    document.body.append(img);
  })
  .catch(console.warn);

