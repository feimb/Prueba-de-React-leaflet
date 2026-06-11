import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Circle,
    CircleMarker,
    Polyline,
    Polygon,
    ScaleControl,
    GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ANTENAS = [
    {
        cluster: "CBD_BEIRAMAR",
        municipio: "Florianopolis",
        lat: -27.5915,
        lon: -48.5527,
    },
    {
        cluster: "UFSC",
        municipio: "Florianopolis",
        lat: -27.5944,
        lon: -48.5561,
    },
    {
        cluster: "TRINDADE",
        municipio: "Florianopolis",
        lat: -27.594,
        lon: -48.5209,
    },
    {
        cluster: "SAO_JOSE_KOBRASOL",
        municipio: "Sao Jose",
        lat: -27.6075,
        lon: -48.6389,
    },
    {
        cluster: "PALHOCA_PEDRA_BRANCA",
        municipio: "Palhoca",
        lat: -27.6226,
        lon: -48.6743,
    },
];

export default function MapaBit() {
    return (
        <MapContainer
            center={[-27.58, -48.55]}
            zoom={12}
            style={{ width: "100%", height: "100vh" }}
        >
            <TileLayer
                url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}"
                attribution="&copy; CARTO"
            />

            {/* Escala */}
            <ScaleControl />

            {/* Marker */}
            <Marker position={[-27.5915, -48.5527]}>
                <Popup>uwu</Popup>
            </Marker>

            {/* CircleMarker */}
            <CircleMarker center={[-27.5944, -48.5561]} radius={10}>
                <Popup>uwu</Popup>
            </CircleMarker>

            {/* Circle */}
            <Circle center={[-27.594, -48.5209]} radius={1000} />

            {/* Línea */}
{/* 
            <GeoJSON
                data={estados}
                style={{
                    color: "red",
                    weight: 3,
                    fillOpacity: 0.1,
                }}
            /> */}
            {/* Polígono */}
            <Polygon
                positions={[
                    [-27.6, -48.55],
                    [-27.61, -48.52],
                    [-27.58, -48.5],
                ]}
            />
        </MapContainer>
    );
}


