import {  useEffect, useState } from 'react';
import axios from 'axios';
import SongForm from './components/SongForm';
import Song from './components/Songs';
import './App.css';

function App() {
    const [songs, setSongs] = useState([])

  const getAllSongs = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_API_URL + "/songs")
      setSongs(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllSongs()
  }, [])
  return (
    <div className="container">
          <SongForm />
          <div className='songs_container' >
            {songs.map((song) => (
                    <Song song={song} key={song._id} />
            ))}
          </div>
    </div>
  );
}

export default App;
