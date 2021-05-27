import React, { useState } from "react";
import API from "../../utils/API";

function UpdateLinks() {
  const [url, setUrl] = useState({
    facebook: "",
    twitter: "",
    youtube: "",
    instagram: "",
    soundcloud: "",
  });

  const handleSubmit = (res, req, e) => {
    e.preventDefault();
    console.log("hi!");
    API.updateBand({ where: { id: req.session.band_id } }).then((res) =>
      console.log("hi", res.data)
    );
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <div className="form-inline">
          <input
            id="facebookURL"
            name="facebook"
            className="form-control mx-sm-3 mb-2"
            type="facebook"
            placeholder="Enter Facebook URL"
            onSubmit={(e) => setUrl({ facebook: e.target.value })}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary mb-2 facebookBtn"
          >
            Save
          </button>
        </div>
        <div className="form-inline">
          <input
            id="twitterURL"
            name="twitter"
            className="form-control mx-sm-3 mb-2"
            type="twitter"
            placeholder="Enter Twitter URL"
            // onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })}
          />
          <button type="submit" className="btn btn-primary mb-2 twitterBtn">
            Save
          </button>
        </div>
        <div className="form-inline">
          <input
            id="youtubeURL"
            name="youtube"
            className="form-control mx-sm-3 mb-2"
            type="youtube"
            placeholder="Enter Youtube URL"
            // onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })}
          />
          <button type="submit" className="btn btn-primary mb-2 youtubeBtn">
            Save
          </button>
        </div>
        <div className="form-inline">
          <input
            id="instagramURL"
            name="instagram"
            className="form-control mx-sm-3 mb-2"
            type="instagram"
            placeholder="Enter Instagram URL"
            // onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })}
          />
          <button type="submit" className="btn btn-primary mb-2 instaBtn">
            Save
          </button>
        </div>
        <div className="form-inline">
          <input
            id="soundcloudURL"
            name="soundcloud"
            className="form-control mx-sm-3 mb-2"
            type="soundcloud"
            placeholder="Enter Soundcloud URL"
            // onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })}
          />
          <button type="submit" className="btn btn-primary mb-2 soundcloudBtn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateLinks;
