export class Marker {

    public latitude: number;
    public longitude: number;
    public title = 'Sin titulo';
    public description = 'Sin description';

    constructor( lat: number, long: number ){
        this.latitude = lat;
        this.longitude = long;
    }
}