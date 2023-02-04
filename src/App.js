import logo from './logo.svg';
import './App.css';
import "leaflet/dist/leaflet.css";

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';

import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
const myicon = DefaultIcon;

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>
          中野キャンパス周辺の美味いラーメン屋
        </p>
      </header>

      {/* 地図の描画 */}
      <MapContainer center={[35.706702747468576, 139.6637251228229]} zoom={16} scrollWheelZoom={false} style={{ height: "55vh" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[35.706994607347724, 139.65934216883352]} icon={myicon}>
            <Popup>
              明治大学 中野キャンパス
            </Popup>
          </Marker>

          <Marker position={[35.708094473906684, 139.66660045074553]} icon={myicon}>
            <Popup>
              麺匠ようすけ 中野本店 <br/> 濃厚な塩味の鶏白湯が食べられる。ついてくるレモンで味変しても美味い。胡麻もおすすめ。
            </Popup>
          </Marker>
          <Marker position={[35.70810754164504, 139.66643951821757]} icon={myicon}>
            <Popup>
              中華そば 青葉 中野本店 <br/> 醤油系のさっぱりラーメン。吉祥寺の店舗は激混みだが、なぜか本店の方が入りやすい。
            </Popup>
          </Marker>
          <Marker position={[35.70840374314005, 139.66631613661232]} icon={myicon}>
            <Popup>
              横浜家系らーめん 五丁目ハウス <br/> 中毒性高め。平日でも開店15分前に列ができている人気店。
            </Popup>
          </Marker>
          <Marker position={[35.70722328651109, 139.66564558438347]} icon={myicon}>
            <Popup>
              味噌が一番 <br/> 地下にある濃厚な味噌ラーメン屋。チャーシューと絡んだ太麺が美味い。
            </Popup>
          </Marker>
          <Marker position={[35.70866836340948, 139.66488752496812]} icon={myicon}>
            <Popup>
              三田製麺所 中野店 <br/> 濃厚つけ麺。店内が広くテーブル席も多めなので、基本的に待たないで入れる。
            </Popup>
          </Marker>
          <Marker position={[35.71016105570067, 139.66470580530395]} icon={myicon}>
            <Popup>
              東京煮干屋本舗 中野本店 <br/> 魚介出汁の油そば。ニボ増し(煮干し増しオプション)温玉トッピングで、机上のフライドオニオン、ブラックペッパーをかけて食べるのが至高。
            </Popup>
          </Marker>
          <Marker position={[35.70918099459732, 139.66650824975727]} icon={myicon}>
            <Popup>
              ただいま、変身中。 <br/> 豆乳牡蠣らーめんが売り。多少癖があるが、牡蠣の旨味成分で殴ってくる。豆乳抜きも選べる。オシャレで綺麗な店内。
            </Popup>
          </Marker>
          <Marker position={[35.70400961162379, 139.66533176593575]} icon={myicon}>
            <Popup>
              横浜家系ラーメン二代目武道家 <br/> 食べる麻薬。白米がついてくる。クソ美味い。胃がもたれる。
            </Popup>
          </Marker>
          <Marker position={[35.703796160651514, 139.66537199911363]} icon={myicon}>
            <Popup>
              竹麓(たけろく)らーめん中野 <br/> 多種なラーメンがあるが、個人的にはチャーシュー飯が一番美味しい。
            </Popup>
          </Marker>
        </MapContainer>

      <header className="App-header">
        <p>
          マップピンのクリックで詳細情報が表示されます。
        </p>
      </header>

    </div>
  );
}

export default App;
