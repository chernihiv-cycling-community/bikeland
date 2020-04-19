import React from 'react';
import SEO from '../components/seo';
import Map from "../components/map"
import '../styles/map.scss'

const center = [51.4843, 31.2928];
const zoom = 13;

const MapPage = () => (
  <>
    <SEO title="Map test page" />
    <h1>Map test page</h1>
    <Map center={center} zoom={zoom} gpx="/tracks/pakul.gpx" />

  </>
);

export default MapPage;
