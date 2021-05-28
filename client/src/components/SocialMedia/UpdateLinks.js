import React, { useState } from "react";
import API from "../../utils/API";

function UpdateLinks(props) {
  const [url, setUrl] = useState({
    facebook: "",
    twitter: "",
    youtube: "",
    instagram: "",
    soundcloud: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.updateBand(props.id, url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="card" style={{ marginTop: 40 }}>
        <div className="card-body">
          <form>
            <div className="form d-flex">
              <i className="fa fa-facebook"></i>
              <input
                id="facebookURL"
                name="facebook"
                className="form-control mx-sm-3 mb-2 mt-3"
                type="facebook"
                placeholder="Enter Facebook URL"
                onChange={(e) => setUrl({ facebook: e.target.value })}
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary mb-4 mt-2 facebookBtn"
              >
                Save
              </button>
            </div>
            <div className="form d-flex">
              <i className="fa fa-twitter"></i>
              <input
                id="twitterURL"
                name="twitter"
                className="form-control mx-sm-3 mb-2 mt-3"
                type="twitter"
                placeholder="Enter Twitter URL"
                onChange={(e) => setUrl({ twitter: e.target.value })}
              />
              <button
                type="submit"
                className="btn btn-primary mb-4 mt-2  twitterBtn"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
            <div className="form d-flex">
              <i className="fa fa-youtube"></i>
              <input
                id="youtubeURL"
                name="youtube"
                className="form-control mx-sm-3 mb-2 mt-3"
                type="youtube"
                placeholder="Enter Youtube URL"
                onChange={(e) => setUrl({ youtube: e.target.value })}
              />
              <button
                type="submit"
                className="btn btn-primary mb-4 mt-2 youtubeBtn"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
            <div className="form d-flex">
              <i className="fa fa-instagram"></i>
              <input
                id="instagramURL"
                name="instagram"
                className="form-control mx-sm-3 mb-2 mt-3"
                type="instagram"
                placeholder="Enter Instagram URL"
                onChange={(e) => setUrl({ instagram: e.target.value })}
              />
              <button
                type="submit"
                className="btn btn-primary mb-4 mt-2 instaBtn"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
            <div className="form d-flex">
              <i className="fa fa-soundcloud"></i>
              <input
                id="soundcloudURL"
                name="soundcloud"
                className="form-control mx-sm-3 mb-2 mt-3"
                type="soundcloud"
                placeholder="Enter Soundcloud URL"
                onChange={(e) => setUrl({ soundcloud: e.target.value })}
              />
              <button
                type="submit"
                className="btn btn-primary mb-4 mt-2 soundcloudBtn"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateLinks;
