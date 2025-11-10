import React from "react";

const Tour = ({ tour, deleteTour }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className="single-tour">
      <p className="title">{tour.name}</p>
      <img src={tour.image} alt={"image"} />
      <p id={`tour-item-para-${tour.id}`} className="tour-info">
        {showMore ? tour.info : tour.info?.substring(0, 200)}
      </p>
      <p className="tour-price">&#8377;{tour.price}</p>
      <div className="tour-footer">
        <button id={`see-more-${tour.id}`} onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "See more"}
        </button>
        <button id={`delete-btn-${tour.id}`} className={`delete-btn`} onClick={() => deleteTour(tour.id)}>
            Delete
        </button>
      </div>
    </div>
  );
};

export default Tour;
