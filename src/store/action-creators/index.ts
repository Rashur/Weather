import * as WeatherActionCreators from './weather'
import * as CityActionCreators from './city'

export default {
    ...WeatherActionCreators,
    ...CityActionCreators,
}