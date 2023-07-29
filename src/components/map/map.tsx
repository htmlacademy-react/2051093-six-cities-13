import { Icon, Marker, layerGroup } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import { OfferProps } from '../../types/offer-types';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from './use-map';

type MapProps = {
  city: OfferProps;
  points: OfferProps[];
  selectedPointId: string | null;
	className: string;
};

const defaultCustomIcon = new Icon({
	iconUrl: URL_MARKER_DEFAULT,
	iconSize: [40, 40],
	iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
	iconUrl: URL_MARKER_CURRENT,
	iconSize: [40, 40],
	iconAnchor: [20, 40]
});


export const OffersMap = (props: MapProps): JSX.Element =>{
	const {city, points, selectedPointId, className} = props;

	const mapRef = useRef(null);
	const map = useMap(mapRef, city);

	useEffect(() => {
		if (map) {
			const markerLayer = layerGroup().addTo(map);
			points.forEach((point) => {
				const marker = new Marker({
					lat: point.location.latitude,
					lng: point.location.longitude
				});

				marker
					.setIcon(
						selectedPointId !== undefined && point.id === selectedPointId
							? currentCustomIcon
							: defaultCustomIcon
					)
					.addTo(markerLayer);
			});

			return () => {
				map.removeLayer(markerLayer);
			};
		}
	}, [map, points, selectedPointId]);

	return <section className={className} ref={mapRef}/>;
};
