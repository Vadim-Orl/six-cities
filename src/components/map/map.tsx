import L, { Icon, Marker, layerGroup } from 'leaflet';
import { City, Offer, Offers } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';

type MapProps = {
  cityMap: City;
  offers: Offers;
  selectedPoint?: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

export default function Map({ offers, cityMap, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityMap);

  useEffect(() => {
    if (map) {
      map.setView([cityMap.location.latitude, cityMap.location.longitude], cityMap.location.zoom);
    }
  }, [map, cityMap]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      
      offers.forEach((offer: { location: any; id: any; price:any }) => {
        const point = offer.location;
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });
        
        marker.bindPopup('Hi Welcome to Tutorialspoint').openPopup();
        marker.setIcon(selectedPoint !== null && offer.id === selectedPoint ? icon : defaultCustomIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return <section id='map' ref={mapRef} className='cities__map map' style={{height: "500px", width:"700px"}} ></section>;
}