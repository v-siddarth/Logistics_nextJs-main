

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.637329894842!2d73.03266848577125!3d19.023716526330197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d898492571%3A0xbbd1ff630b56532e!2sS-IT%20COMPUTER%20CBD%20BELAPUR%20%2C%20Data%20Science%2C%20Data%20Analytics%2C%20Java%2C%20Dot%20Net%2C%20Software%20Testing%2C%20AWS%2C%20Azure%2C%20Coures%20Available.!5e0!3m2!1sen!2sin!4v1755064567796!5m2!1sen!2sin"
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