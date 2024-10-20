import movieStyle from './movies.module.css'
import NavBar from '../components/navbar';

export default async function page() {
  const res = await fetch('https://freetestapi.com/api/v1/movies');
  const data = await res.json();
  console.log(data);
  
  return (
    <div className={movieStyle.tableDiv}>
      <NavBar/>
      <h1 className={movieStyle.heading}>Explore Different Kinds of Movies</h1>
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
          {data.map((movie: any) => { 
            let color = movie.id%2==0 ? '#247386' : '#1D607A';
           return <tr key={movie.id}>
              <td style={{ padding: '8px' }}>{movie.id}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.title}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.year}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>
                <ul style={{ marginLeft: '30px' }}>
                  {movie.genre.map((gen: string) => (
                    <li key={gen}>{gen}</li>
                  ))}
                </ul>
              </td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.rating}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.director}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>
                <ul style={{ marginLeft: '30px' }}>
                  {movie.actors.map((actor: string) => (
                    <li key={actor}>{actor}</li>
                  ))}
                </ul>
              </td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.plot}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.runtime}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.awards}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.boxOffice}</td>
              <td style={{ border: '1px solid white', padding: '8px', backgroundColor:`${color}` }}>{movie.production}</td>
            </tr>
})}
        </tbody>
      </table>
    </div>
  );
}
