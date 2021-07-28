let getAPI = async () => {
    let data = await fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7c37b2e10emsh3e2ef3ca3a9a372p13feb7jsn78430f056d77",
            "x-rapidapi-host": "shazam.p.rapidapi.com"
        }
    })
    let jsonData = await data.json()
    console.log(jsonData.tracks[0].images.background)
}
