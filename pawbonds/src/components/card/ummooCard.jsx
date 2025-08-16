import "./style.css";
export default function UmmooCard() {
  return (
    <div className="ummooCardContainer">
      <div className="ummooCard">
        <div className="ummooCard--EdgeblurEffect"></div>
        <div className="ummooCard--img--txt--on--img--container">
          <img className="ummooCard--img" src="assets/dog1.png" alt="" />
          <div className="ummooCard--txt--left--nd--right--on--img--container">
            <div className="left--txt--nd--icon--on--img--container">
              <img
                className="ummooCard--ummoo-card-location-icon"
                src="assets/location-icon.svg"
                alt=""
              />
              <p className="txt--on--img--left">London, ON</p>
            </div>
            <div className="right--txt--on--img--container">
              <img
                className="ummooCard--ummoo-card-location-icon"
                src="assets/sales-icon.svg"
                alt=""
              />
              <p className="txt--on--img--rightLeft">Adoption fee</p>
              <p className="txt--on--img--rightRight">$200</p>
            </div>
          </div>
        </div>
        <div className="ummooCard--header--nd--sub--txt--container">
          <div className="ummooCard--main--nd--sub--txt--container">
            <p className="ummooCard--header-txt">Myo</p>
            <p className="ummoo--sub--txt">Golden retriver</p>
          </div>
          <div className="highlighted--txt--container">
            <div className="highlightd--txt 1">Senior</div>
            <div className="highlightd--txt 2">Female</div>
            <div className="highlightd--txt 3">Small</div>
          </div>
        </div>
      </div>
      <button class="learnMoreBtn">Learn more</button>
    </div>
  );
}
