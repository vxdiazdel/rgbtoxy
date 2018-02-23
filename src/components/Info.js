import React from 'react';

const Info = (props) => (
  <div className="modal-wrapper mt-4">
    <h6 className="text-center" data-toggle="modal" data-target="#info">What is this?</h6>
    <div className="modal fade" id="info" tabIndex="-1" role="dialog" aria-labelledby="info" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <p>RGBToXY is a color conversion tool that can be used to convert any RGB value into it's nearest corresponding XY value. The XY value can be used to set custom colors for your Philips Hue lights when connecting to the Hue API. These XY values are meant to work specifically with the 'LCT007' model (for now).</p>
          </div>
          <div className="modal-footer">
            <p>Show me some <span role="img" aria-label="heart" className="heart">❤️</span></p>
            <p>BTC: 1EbAK3AqVfNQpfCeaMZGYJoFGhizHoNzco</p>
            <p>ETH: 0x410E91175E92305189c9E9807BAD9BC8531775A8</p>
            <p>LTC: LaPyeeFi2RQgktpL8TjgdJKsUKGrweTDAb</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
