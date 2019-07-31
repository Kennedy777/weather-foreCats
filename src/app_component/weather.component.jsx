import React from "react";
import "./App.css";
import Form from "./app_component/form.component";
import Weather from "./app_component/weather.component";
import "bootstrap/dist/css/bootstrap.min.css";

// git project https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";

const Api_Key = "429736441cf3572838aa10530929f7cd";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      weather_id: undefined,
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  get_CatPics(pics, weatherID) {

  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );

      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        weather_id: response.weather[0].id,
        error: false
      });

      // set icons
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    } else {
      this.setState({
        error: true
      });
    }
  };

   //set cat pics

    this.get_CatPics(this.weatherIcon, response.weather[0].id);

      console.log(response);
      } else {
      this.setState({
     error: true
       });
      }
    };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weather_id={this.state.id}
        />
      </div>
    );
  }
}

export default App;



// WORKING CODE


// import React from "react";
// import "./weather.style.css";

// const Weather = props => {
//   return (
//     <div className="container text-light">
//       <div className="Card">
//         <h2 className="text-white py-3">{props.cityname}</h2>
//         <h5 className="py-4">
//           <i className={`wi ${props.weatherIcon} display-1`} />
//         </h5>

//         {/* Get Celsius */}
//         {props.temp_celsius ? (
//           <h1 className="py-2">{props.temp_celsius}&deg;</h1>
//         ) : null}

//         {/* show max and min temp */}
//         {maxminTemp(props.temp_min, props.temp_max)}

//         {/* Weather description */}
//         <h4 className="py-3">
//           {props.description.charAt(0).toUpperCase() +
//             props.description.slice(1)}
//         </h4>

//         {/* Weather Cat Pic */}
//         <div className="CatPic">
//          // {props.description.id=cloudy, }


//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Weather;

// function maxminTemp(min, max) {
//   if (max && min) {
//     return (
//       <h3>
//         <span className="px-4">{min}&deg;</span>
//         <span className="px-4">{max}&deg;</span>
//       </h3>
//     );
//   }
// }

