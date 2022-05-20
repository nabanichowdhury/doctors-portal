import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: "1",
      name: "Riyano gujle",
      location: "California",
      review:
        "lconsectetur adipisicing elit. Consectetur, voluptatum beatae rerum praesentium maxime vitae labore fugiat est nobis veniam tenetur! Atque dolorem natus libero aspernatur minus, quasi esse impedit",
      img: people1,
    },
    {
      _id: "2",
      name: "Anthusiast",
      location: "California",
      review:
        "lconsectetur adipisicing elit. Consectetur, voluptatum beatae rerum praesentium maxime vitae labore fugiat est nobis veniam tenetur! Atque dolorem natus libero aspernatur minus, quasi esse impedit",
      img: people2,
    },
    {
      _id: "2",
      name: "Harry vhaiya",
      location: "California",
      review:
        "lconsectetur adipisicing elit. Consectetur, voluptatum beatae rerum praesentium maxime vitae labore fugiat est nobis veniam tenetur! Atque dolorem natus libero aspernatur minus, quasi esse impedit",
      img: people3,
    },
  ];
  return (
    <div>
      <section>
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl text-primary font-bold">Testimonials </h4>
            <h2 className="text-3xl">What Our Patients Say</h2>
          </div>
          <div>
            <img className="w-48 lg:w-98" src={quote} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          {reviews.map((review) => (
            <Review review={review}></Review>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
