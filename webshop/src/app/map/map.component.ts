import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 59.43699149608402, 24.746264024656316 ],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map); 

    const marker = L.marker([59.42200761061695, 24.794713858199238]);
    marker.addTo(this.map);
    marker.bindPopup("Ülemiste keskus<br>Avatud 9-21")

    const marker2 = L.marker([59.42671780675369, 24.723970225026594]);
    marker2.addTo(this.map);
    marker2.bindPopup("Kristiine keskus<br>Avatud 9-21")

    const marker3 = L.marker([59.42625236391602, 24.651126764608257]);
    marker3.addTo(this.map);
    marker3.bindPopup("Rocca Al Mare keskus<br>Avatud 9-21")
  }

  constructor() { } //constructor failide ühendamiseks 
  // router navigeerimiseks, ActivatedRoute(URL parameetri leidmiseks)
  // HttpClient (Http päringute tegemiseks), TranslateService (keele vahetuseks)
  // (Kõik tulevad node_modules kausta seest - valmiskirjutatud koodilõigud)

  ngOnInit(): void {
  } // käimaminemise funktsioon -> läheb käima vahetult enne HTML-i

  // lifecycle function
  ngAfterViewInit(): void { 
    this.initMap();
  } // käimaminemise funktsioon -> läheb käima vahetult pärast HTML-i

  onZoom() {
    this.map.setView(L.latLng([59.43699149608402, 24.746264024656316]), 12);
  }

  onZoomYl(){
    this.map.setView(L.latLng([59.42200761061695, 24.794713858199238]), 13);
  }

  onZoomKr(){
    this.map.setView(L.latLng([59.42671780675369, 24.723970225026594]), 13);
  }

  onZoomRo(){
    this.map.setView(L.latLng([59.42625236391602, 24.651126764608257]), 13);
  }

}
