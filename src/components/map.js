import React, { Component } from "react"
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'
import 'leaflet-gpx'

export default class Map extends Component {
    state = {
      loaded: false,
      stats: {
          disance: 0,
          elevationGain: 0,
      }
    }
    render() {
        return (
            <div>
                <div id="map"></div>
                {this.state.loaded &&
                    <dl>
                        <dt>Довжина маршруту</dt>
                        <dd>{this.state.stats.distance} м</dd>
                        <dt>Набір висоти</dt>
                        <dd>{this.state.stats.elevationGain} м</dd>
                    </dl>
                }
            </div>
        )
    }
    componentDidMount() {
        const postion = {
            center: [51.4843, 31.2928],
            zoom: 13,
        }
        this.map = Leaflet.map('map').setView(this.props.center || postion.center, this.props.zoom || postion.zoom);
        Leaflet.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={accessToken}', {
            attribution: 'Maps &copy; <a href="https://www.thunderforest.com/" target="_blank">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap contributors</a>',
            maxZoom: 18,
            id: 'thunderforest/cycle',
            tileSize: 256,
            zoomOffset: 0,
            accessToken: 'cd4c227b07a64748bf4d033e55a20454'
        }).addTo(this.map);

        new Leaflet.GPX(this.props.gpx, {async: true}).on('loaded', (e) => {
          this.map.fitBounds(e.target.getBounds());
          this.setState({
            loaded: true,
            stats: {
                distance: e.target.get_distance(),
                elevationGain: e.target.get_elevation_gain(),
            }
          });
        }).addTo(this.map);
    }
    componentWillUnmount() {
        this.map._initEvents(true)
        this.map._stop()
        this.map.remove()
      }

}