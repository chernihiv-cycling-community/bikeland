import React from 'react';
import loadable from '@loadable/component'
import SEO from '../components/seo';
import '../styles/map.scss'

const Map = loadable(() => import('../components/map'))

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
