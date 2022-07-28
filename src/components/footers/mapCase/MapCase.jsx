import React from 'react';
import './style.scss'
import map from '../../resources/image/map.png'
import sub from '../../resources/logo/Subtract.svg'

function MapCase() {
   return (
      <div className='map-block'>
         <img src={map} className="map" />
         <img src={sub} className="sub" />
      </div>
   );
}

export default MapCase;
