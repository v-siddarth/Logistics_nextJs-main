

const GoogleMap = () => {
  return (
    <>
      <div className="map-section">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="map-container">
              <div className="map-single-box">
                <div className="map-info-box">
                  <div className="map-icon">
                    <img src="assets/images/resource/map1.png" alt="" />
                  </div>
                  <div className="map-content">
                    <span>Location</span>
                    <h4>International Infotech Center, CBD Belapur, Navi Mumbai - 400614</h4>
                  </div>
                </div>
                <div className="map-info-box">
                  <div className="map-icon">
                    <img src="assets/images/resource/map2.png" alt="" />
                  </div>
                  <div className="map-content">
                    <span>Email</span>
                    <a href="mailto:docs@sglogsitics.net.in" 													style={{
														color: 'inherit',
														textDecoration: 'none',
														cursor: 'pointer'
													}}><h4>docs@sglogsitics.net.in</h4></a>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.0167927071034!2d73.03672607520389!3d19.01898168217388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzA4LjMiTiA3M8KwMDInMjEuNSJF!5e0!3m2!1sen!2sin!4v1763118533746!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy">
              </iframe>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;