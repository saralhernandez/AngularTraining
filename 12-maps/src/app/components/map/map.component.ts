import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  markers: Marker[] = [];
  snackBar: MatSnackBar;
  
  constructor(snackBar: MatSnackBar) { 
    if ( localStorage.getItem('marcadores') ) {
      this.markers = JSON.parse(localStorage.getItem('marcadores')!);
    }
    this.snackBar = snackBar;
  }

  ngOnInit() {
  }

  addMarker( $event : any)
  { 
    this.markers.push(new Marker(51.678418, 7.809007)); 
    this.markers.push(new Marker(51.678418, 7.82));
    this.markers.push(new Marker(51.678418, 7.81));
    this.saveStorage();
    // Simple message with an action.
    this.snackBar.open('Marcadores adicionados', 'Cerrar', {duration: 3000});
  }

  saveStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.markers));
  }

  deleteMarker(index: number){
    this.markers.splice(index, 1);
    this.saveStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }
}
