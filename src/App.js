import React, { useState } from "react";
import Axios from "axios";

const App = () => {
  const [name, setName] = useState();

  const uploadImage = (event) => {
    event.preventDefault();
    // console.log(event.target.files[0].name);
    // let filename = event.target.files[0].name;
    // setName(filename);

    const formData = new FormData()
    formData.append("file", name)
    formData.append("upload_preset", "uploadpresetforreact")
    Axios.post(
      "https://api.cloudinary.com/v1_1/dshhfnpgu/image/upload   ",
      formData
    ).then((response) => {console.log(response)});

    
  };

  return (
    <>
      <div className="ImageUpload mt-5">
        <div className="col-8 m-auto shadow-sm p-0 py-4 border">
          <form className="col-11 m-auto">
            <div className="d-flex">
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(event) => setName(event.target.files[0].name)}
              />
              {/* <input className="form-control" type="submit" value="upload" /> */}
              <button className="btn btn-primary col-2" onClick={uploadImage}>
                Upload Image
              </button>
            </div>
            <div className="shadow mt-3 p-3">
              <h4 className="mb-0">File Name : {name}</h4>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   Handler = (event) => {
//     console.log(event.target.files[0])
//     console.log('Click');
//   }

//   render() {
//     return (
//       <>
//         <div className="ImageUpload mt-5">
//           <div className="col-8 m-auto shadow-sm p-0 py-4 border">
//             <form className="col-11 m-auto">
//               <div className="d-flex">
//                 <input className="form-control" type="file" id="formFile" onChange={this.Handler} />
//                 <input className="form-control" type="submit" value="upload" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

export default App;
