"use client";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import L from "leaflet";
import "leaflet.markercluster";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { branches } from "@/lib/content";

const label = (name: string) =>
  L.divIcon({
    className: "",
    html: `<span style="white-space:nowrap;background:#1b1c24;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:6px;padding:4px 10px;font:600 12px Pretendard,sans-serif;box-shadow:0 2px 6px rgba(0,0,0,.5);transform:translate(-50%,-100%);display:inline-block">${name} ›</span>`,
    iconSize: [0, 0],
  });

const clusterIcon = (cluster: L.MarkerCluster) =>
  L.divIcon({
    className: "",
    html: `<span style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#7a30e8;color:#fff;font:700 14px Pretendard,sans-serif;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);transform:translate(-50%,-50%)">${cluster.getChildCount()}</span>`,
    iconSize: [0, 0],
  });

const bounds = L.latLngBounds(branches.map((b) => [b.lat, b.lng] as [number, number]));

function Clusters() {
  const map = useMap();
  useEffect(() => {
    const group = L.markerClusterGroup({ iconCreateFunction: clusterIcon, maxClusterRadius: 60, showCoverageOnHover: false });
    branches.forEach((b) => group.addLayer(L.marker([b.lat, b.lng], { icon: label(b.name) })));
    map.addLayer(group);
    // 화면 크기에 맞춰 모든 지점이 여백과 함께 보이도록 다시 맞춘다
    const fit = () => map.fitBounds(bounds, { padding: [48, 48], animate: false });
    fit();
    map.on("resize", fit);
    return () => { map.off("resize", fit); map.removeLayer(group); };
  }, [map]);
  return null;
}

export default function BranchMap() {
  return (
    // 모바일에서는 한 손가락 드래그가 페이지 스크롤을 막지 않도록 지도 이동을 끈다 (핀치 줌은 유지)
    <MapContainer center={[37.5173, 127.042]} zoom={11} scrollWheelZoom={false} dragging={!L.Browser.mobile} className="h-full w-full">
      <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Clusters />
    </MapContainer>
  );
}
