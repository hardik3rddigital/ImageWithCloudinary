import React, { useState } from "react";
const App2 = () => {
  const [isActive, setActive] = useState("");


  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "uploadpresetforreact");
    data.append("cloud_name", "dshhfnpgu");
    fetch("https://api.cloudinary.com/v1_1/dshhfnpgu/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data.url);
        setActive('Image_Active');
        // let urllist = [];
        // let setdataurl = data.url;
        // urllist.push(setdataurl);
        // console.log(urllist);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={isActive}>
      <div className="UploadImage mt-5">
        <div className="col-8 m-auto shadow border p-3 d-flex">
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <button onClick={uploadImage} className="btn btn-primary">
            Upload
          </button>
        </div>
        <div className="col-8 m-auto mt-4 border shadow p-3">
          <h4>Uploaded image</h4>
          <img src={url} className="img-fluid w-100 p-3 border shadow d-none uploadedimage" alt='uploaded image' />
        </div>
      </div>
    </div>
  );
};
export default App2;
