import React, { Component } from "react"
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'
import 'leaflet-gpx'

export default class Map extends Component {
    state = {
      loaded: false,
      stats: {
          disance: 0,
          elevationGain: 0,
          elevationData: [],
      }
    }
    distanceFormatter(distance) {
        return Math.round(distance*10) / 10 + ' км';
    }
    elevationFormatter(elevation) {
        return Math.round(elevation) + ' м';
    }
    onMouseOver(e) {
        console.log('Over', e);
        // e.activePayload[0].payload.distance;
    }
    render() {
        return (
            <div>
                <div id="map"></div>
                {this.state.loaded &&
                    <div>
                        <dl>
                            <dt>Довжина маршруту</dt>
                            <dd>{this.state.stats.distance} м</dd>
                            <dt>Набір висоти</dt>
                            <dd>{this.state.stats.elevationGain} м</dd>
                        </dl>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={this.state.stats.elevationData} onMouseMove={this.onMouseOver}>
                                <XAxis hide={true} dataKey="distance" tickFormatter={this.distanceFormatter} interval="preserveStartEnd" minTickGap={20} axisLine={false} allowDecimals={false}/>
                                <YAxis mirror={true} />
                                <Line type="linear" dataKey="elevation" name="Висота" stroke="#8884d8" dot={false} />
                                <Tooltip formatter={this.elevationFormatter} labelFormatter={this.distanceFormatter} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
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
            debugger;
            this.gpx = e.target;
            this.map.fitBounds(this.gpx.getBounds());
            this.setState({
                loaded: true,
                stats: {
                    distance: this.gpx.get_distance(),
                    elevationGain: this.gpx.get_elevation_gain(),
                    elevationData: this.gpx.get_elevation_data().map((item) => ({
                        distance: item[0],
                        elevation: item[1],
                        tooltip: item[2],
                    })),
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