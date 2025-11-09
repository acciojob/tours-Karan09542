import React from "react";

const Tour = ({ tour, deleteTour }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className="single-tour">
      <p className="title">{tour.name}</p>
      <img src={tour.image} alt={"image"} />
      <p className="tour-info">
        {showMore ? tour.info : tour.info?.substring(0, 200)}
      </p>
      <p className="tour-price">&#8377;{tour.price}</p>
      <div className="tour-footer">
        <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "See less" : "Show more"}
        </button>
        <button className="delete-btn" onClick={() => deleteTour(tour.id)}>
            Delete
        </button>
      </div>
    </div>
  );
};

export default Tour;
