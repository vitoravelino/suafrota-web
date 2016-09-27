/* eslint no-undef: "off" */
class Gmaps {
  constructor(mapEl) {
    this.map = new google.maps.Map(mapEl, { zoom: 12 });
    this.markers = [];

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      setTimeout(() => this.fitBounds(), 500);
    });
  }

  fitBounds() {
    const bounds = new google.maps.LatLngBounds();

    this.markers.forEach((m) => bounds.extend(m.position));
    this.map.fitBounds(bounds);
  }

  clearMarkers() {
    this.markers.forEach((m) => m.setMap(null));
    this.markers = [];
  }

  goTo(position, zoom = 15) {
    this.map.setCenter(position);
    this.map.setZoom(zoom);
  }

  resize() {
    google.maps.event.trigger(this.map, 'resize');
  }

  addMarkers(collection) {
    if (!collection) {
      return;
    }

    collection.forEach((item) => {
      const position = {
        lat: item.lat,
        lng: item.lng,
      };

      const marker = new google.maps.Marker({
        position,
        map: this.map,
        title: item.serial,
      });

      this.markers.push(marker);
    });
  }
}

function wrap(mapEl) {
  return new Gmaps(mapEl);
}

export default {
  wrap,
};
