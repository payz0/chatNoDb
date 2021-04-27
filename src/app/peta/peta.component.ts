import { Component, OnInit } from '@angular/core';
import { defaults as defaultControls } from 'ol/control';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';
import * as olCoordinate from 'ol/coordinate';


@Component({
  selector: 'app-peta',
  templateUrl: './peta.component.html',
  styleUrls: ['./peta.component.css']
})
export class PetaComponent implements OnInit {
map:any
  constructor() { }

  ngOnInit() {
   
  this.peta()
  // this.map.getView().setCenter([111.648117838,-2.708055877536273], 'EPSG:4326', 'EPSG:3857');
  // this.map.getView().setZoom(5);
  }

  peta(){
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      // coord : new olCoordinate({
      //   coord: [-2.708055877536273,111.648117838 ]
      // }),
      view: new View({
        center: [342.7080,2.648117838 ],
        zoom: 5
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            -2.708055877536273,111.648117838
          ]
        })
      ])
    });
  }

}
