import React , {useState} from 'react'

const api = {
    key:'28735f4ba9851439855fc735fb01f08f',
    base:"http://api.openweathermap.org/data/2.5/"
}
 
 const Project = () => {

    const [query,setQuery]=useState('');
    const [weather,setWeather] = useState({});

    const search = evt =>{
        if (evt.key === 'Event')[
            fetch (`${api.base} weather?q=${query} &units=metric&APPID=${api.key}`)
            .then(res=>res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(weather);

            }
            )
        ]
    }

    const dateBuilder = (d) =>{
        let months = [
            'january','february' ,'march' ,'april','may','june','july','august','september','october','november','december'
        ]
        let days = [
            'sunday','monday','tuesday','wednesday','thursday','friday','saturday'
        ]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
  return (
    <div className='container'>
        <main>
            <div className='searchbox'>
                <input type="text" className='searchbar' placeholder='search' onChange={e => setQuery (e.target.value)} value={query} onKeyPress= {search} />

            </div>
            {(typeof weather.main != 'undefined') ? (
                <div>
            <div className='locationbox'>
                <h1>habeeb</h1>
                <div className='location'> {weather.name},{weather.sys.country}</div>
                    <div className='date'>
                   {dateBuilder(new Date())}
                    </div>
                
            </div>
            <div className='weatherbox'>
                <h1>Weather</h1>
                <div className='temp'>{Math.round(weather.main.temp)}c</div>
                <div className='weather'>{weather.weather[0].main} </div>
            </div>
            </div>
            ) : ('')};
        </main>

    </div>
  )
}

export default Project;
