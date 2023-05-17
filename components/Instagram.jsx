import React from "react";

import Img1 from "../public/ig-img-1.jpg";
import Img2 from "../public/ig-img-2.jpg";
import Img3 from "../public/ig-img-3.jpg";
import Img4 from "../public/ig-img-4.jpg";
import Img5 from "../public/ig-img-5.jpg";
import Img6 from "../public/ig-img-6.jpg";
import InstagramImg from "../components/InstagramImg";

const Instagram = () => {
  return (
    <div>
      <div className="text-center justify-center">
        <p className="font-bold text-2xl"> Follow me on Instagram</p>
        <p className="font-bold text-xl"> @Cosmo</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
        <InstagramImg SocialImg={Img1} />
        <InstagramImg SocialImg={Img2} />
        <InstagramImg SocialImg={Img3} />
        <InstagramImg SocialImg={Img4} />
        <InstagramImg SocialImg={Img5} />
        <InstagramImg SocialImg={Img6} />
      </div>
    </div>
  );
};

export default Instagram;
