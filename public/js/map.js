(function () {
  function initializeMap() {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) {
      return;
    }

    if (typeof L === "undefined") {
      console.error("Leaflet library not loaded. Map cannot be rendered.");
      return;
    }

    const dataElement = document.getElementById("listing-data");
    if (!dataElement) {
      console.warn("Listing data element not found in DOM.");
      return;
    }

    let data;
    try {
      data = JSON.parse(dataElement.textContent);
    } catch (error) {
      console.error("Failed to parse listing data:", error);
      return;
    }

    const fallback = { lat: 20.9517, lng: 85.0985 }; // Odisha center

    const coordinates = Array.isArray(data?.geometry?.coordinates)
      ? data.geometry.coordinates
      : null;

    const [coord0, coord1] = coordinates || [];
    const isNumber = (value) =>
      typeof value === "number" && !Number.isNaN(value);
    const isValidLat = (value) => isNumber(value) && Math.abs(value) <= 90;
    const isValidLng = (value) => isNumber(value) && Math.abs(value) <= 180;

    let rawLng = coord0;
    let rawLat = coord1;

    if (!isValidLat(rawLat) || !isValidLng(rawLng)) {
      if (isValidLat(coord0) && isValidLng(coord1)) {
        rawLat = coord0;
        rawLng = coord1;
      }
    }

    const hasValidCoordinates = isValidLat(rawLat) && isValidLng(rawLng);
    const lat = hasValidCoordinates ? rawLat : fallback.lat;
    const lng = hasValidCoordinates ? rawLng : fallback.lng;

    const map = L.map("map", {
      scrollWheelZoom: false,
      zoomControl: true,
    }).setView([lat, lng], hasValidCoordinates ? 12 : 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
      iconRetinaUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      shadowSize: [41, 41],
    });

    const marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);

    const escapeHTML = (value) =>
      typeof value === "string"
        ? value.replace(/[&<>"']/g, (char) => {
            const map = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            };
            return map[char];
          })
        : value;

    const locationLabel = escapeHTML(data?.location ?? "Listing location");
    const popupBody = hasValidCoordinates
      ? "Exact location will be shared after booking."
      : "We could not fetch the exact location. Displaying an approximate area.";

    marker
      .bindPopup(
        `<div class="map-popup"><h5 class="mb-1">${locationLabel}</h5><p class="mb-0">${popupBody}</p></div>`
      )
      .openPopup();
  }

  if (document.readyState === "complete") {
    initializeMap();
  } else {
    window.addEventListener("load", initializeMap, { once: true });
  }
})();
