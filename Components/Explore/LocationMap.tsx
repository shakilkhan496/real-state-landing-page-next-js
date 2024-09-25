"use client";
import React, { Ref, useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import Map, { MapRef, Marker, NavigationControl } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import mapboxgl from "mapbox-gl";
import { HiMapPin } from "react-icons/hi2";
import { MdOutlineGpsFixed } from "react-icons/md";
type Props = {};
type room = {
  id: number;
  title: string;
  longitude: number;
  latitude: number;
};
type coordinate = {
  longitude: number;
  latitude: number;
};
type coordinateString = {
  longitude: string;
  latitude: string;
};
export default function LocationMap({}: Props) {
  const data: room[] = [
    { id: 0, title: "Home 1", longitude: 2.3199, latitude: 48.88 },
    { id: 1, title: "Home 2", longitude: 2.32, latitude: 48.881 },
    { id: 2, title: "Home 3", longitude: 2.321, latitude: 48.8799 },
    { id: 3, title: "Home 4", longitude: 2.32, latitude: 48.88 },
  ];

  const mapContainer = useRef<MapRef | undefined>();
  const [selected, setSelected] = useState<room>();
  const [center, setcenter] = useState<coordinate>();
  const coordinates = data?.map((res: room) => ({
    longitude: res.longitude,
    latitude: res.latitude,
  }));
  const Center = (lg: number, lt: number) => {
    if (lg && lt) {
      console.log("center was set to :", lg + " " + lt);
    }
  };
  useEffect(() => {
    mapContainer.current?.setCenter(
      new mapboxgl.LngLat(center?.longitude ?? 0, center?.latitude ?? 0)
    );
  }, [center]);
  useEffect(() => {
    const center: coordinate | false = getCenter(coordinates);
    setcenter(center as coordinate);
    console.log(center);
    // if (center) Center(center.longitude, center.latitude);
  }, []);

  const API_KEY = "G37xRluKpwmumvaEmjcF";
  return (
    <Map
      ref={mapContainer as Ref<MapRef>}
      mapLib={maplibregl}
      initialViewState={{
        zoom: 18,
        pitch: 60,
        bearing: 0,
        latitude: center?.latitude,
        longitude: center?.longitude,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={`https://api.maptiler.com/maps/stage/style.json?key=G37xRluKpwmumvaEmjcF`}
    >
      <NavigationControl position="top-right" />
      {data?.map((room: room, i: number) => {
        return (
          <div className="relative" key={room.latitude + "-" + i}>
            <Marker
              longitude={room.longitude}
              latitude={room.latitude}
              color={"#f97316"}
            >
              <HiMapPin
                fill="#f97316"
                color="#f97316"
                aria-label="push-pin"
                onClick={() => {
                  Center(room.longitude, room.latitude);
                  setSelected(room);
                }}
                className="h-9 w-9 animate-bounce text-4xl drop-shadow-lg"
              ></HiMapPin>
              {selected?.id === room.id ? (
                <div className="absolute truncate rounded-3xl bg-slate-50 py-4 px-3 font-semibold text-stone-700">
                  {room?.title}
                </div>
              ) : (
                false
              )}
            </Marker>
          </div>
        );
      })}
      {/* <div
        onClick={GotoCenter}
        className="absolute top-28 right-0 mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-[2px] bg-white active:scale-[97%]"
      >
        <MdOutlineGpsFixed className="h-5 w-5"></MdOutlineGpsFixed>
      </div> */}
    </Map>
  );
}
