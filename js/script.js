function initMap() {
    const myLatLng = { lat: 49.786023, lng: 9.071649 };
    const map = new google.maps.Map(document.querySelector("#map"), {
        zoom: 18,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}