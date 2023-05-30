const img1 = "https://assets.ccbp.in/frontend/react-js/rcb-img.png";
const img2 = "https://assets.ccbp.in/frontend/react-js/csk-img.png";
const element = (
  <div className="container">
    <h1>super over league</h1>
    <div className="img">
      <img src={img1} />
      <img src={img2} />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
