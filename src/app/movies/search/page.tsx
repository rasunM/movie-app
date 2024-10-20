'use client';
import searchPageStyles from './search.module.css';
import NavBar from '@/app/components/navbar';
import { FaSearch } from 'react-icons/fa';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (...args: [string | Request, RequestInit?]): Promise<any> => 
  fetch(...args).then((response) => response.json());

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [url, setUrl] = useState('https://freetestapi.com/api/v1/movies');

  const { data, error } = useSWR(url, fetcher);

  const handleSearch = () => {
    if (searchQuery) {
      setUrl(`https://freetestapi.com/api/v1/movies?search=${searchQuery}`);
    }
  };

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className={searchPageStyles.body} style={{height: data?.length>10 ? '100%' :'100vh'}}>
      <NavBar />
      <div className={searchPageStyles.searchBar} >
        <input
          type='text'
          className={searchPageStyles.search}
          placeholder='Search Your Favourite Movie ...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className={searchPageStyles.searchIconDiv} onClick={handleSearch}>
          <FaSearch className={searchPageStyles.searchIcon} />
        </div>
      </div>
      <div className={searchPageStyles.tableDiv} >
        <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
          <thead>
            <tr>
              <th></th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Year</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Genre</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Rating</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Director</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Actors</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Plot</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Runtime</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Awards</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Box Office</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Production</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((movie: any) => {
              let color = movie.id % 2 === 0 ? '#247386' : '#1D607A';
              return (
                <tr key={movie.id}>
                  <td style={{ padding: '8px' }}>{movie.id}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.title}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.year}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>
                    <ul style={{ marginLeft: '30px' }}>
                      {movie.genre.map((gen: string) => (
                        <li key={gen}>{gen}</li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.rating}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.director}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>
                    <ul style={{ marginLeft: '30px' }}>
                      {movie.actors.map((actor: string) => (
                        <li key={actor}>{actor}</li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.plot}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.runtime}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.awards}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.boxOffice}</td>
                  <td style={{ border: '1px solid white', padding: '8px', backgroundColor: `${color}` }}>{movie.production}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
