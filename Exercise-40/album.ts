function make_album(artist : string , title : string , tracks? : number) : {
    artist : string , title : string , tracks? : number
} {
    const album : {
        artist : string , title : string , tracks? : number
    } = { artist , title}
    
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album
}

// Creating different dictionaries representing different albums 

const album1 = make_album("Artist1", "Album One", 10);
const album2 = make_album("Artist2", "Album Two");
const album3 = make_album("Artist3", "Album Three", 77);

// Print each return value to show that objects are storing the album information correctly 

console.log(album1);
console.log(album2);
console.log(album3);

