import React  from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkImg from '../assets/marke.svg'


import '../styles/pages/orphanange-map.css'
function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkImg} alt="mapMarking" />

                    <h2>Escolha um orfanato no mapa </h2>
                    <p>Muitas Criancas estao esperando sua visita :) </p>
                </header>

                <footer>
                    <strong>Ipaussu</strong>
                    <p> Sao Paulo</p>
                </footer>
            </aside>

            <Map
              center={[-23.0587365,-49.6197098]}
              zoom={15}
              style={{  width:'100%', height: '100%'  }}
            >
              <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
           </Map>

            <Link to="" className="create-orphanange">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}


export default OrphanagesMap;