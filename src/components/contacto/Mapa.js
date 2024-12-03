import React from "react";

class Mapa extends React.Component {
  render() {
    return (
      <div className="google-map" data-aos="fade-left" data-aos-delay="60">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.160093319334!2d-104.62015572529785!3d23.990123179532223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb833da45df2b%3A0x2392fefbf317535!2sUniversidad%20Tecnol%C3%B3gica%20de%20Durango!5e0!3m2!1ses-419!2smx!4v1733229507382!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default Mapa;
