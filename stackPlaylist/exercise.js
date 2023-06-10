import { Node } from "./node.js";

export class Playlist {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    addSong(song) {      
        const addingSong = new Node(song);

        if (!this.top) {
            this.top = addingSong;
            this.bottom = addingSong;
        } else {
            addingSong.next = this.top;
            this.top = addingSong;
        }
         
        this.length++;
        return this;
    }

    playSong() {
        if (!this.top) {
            // throw new Error( "No hay canciones en la lista")
            console.log("No hay canciones en la lista");
            return null;
        }
        if (this.top == this.bottom) {
            this.bottom = null;
        }

        let playedSong = this.top;
        this.top = this.top.next;
        this.length--;

        return playedSong.song;
    }

    getPlaylist() {
        // Tu código aquí 👈🏻
        if (this.length == 0) {
            return [];
        }
        let songReceived = this.top;
        let songsArray = [];

        while (songReceived != undefined) {
            songsArray.push(songReceived.song);
            songReceived = songReceived.next;
        }

        return songsArray;
    }
}
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.getPlaylist())

console.log(playlist.playSong())
console.log(playlist.playSong())
console.log(playlist.playSong())
console.log(playlist.playSong())


