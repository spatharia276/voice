import React from "react";

const Card = ({ menuData }) => {
    console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const {name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
<div className="voice">
                  <span className="voice-button">Voice Sample</span></div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;