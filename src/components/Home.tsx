import * as React from "react";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: 
      ".../cms/public/uploads/2e77b69d0e374f11b3d3bce3b5900520.jpg",
    width: 1,
    height: 1
  },
  // https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582370/beachshell.jpg
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582357/countryroad.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582362/firestation.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582369/elliotbay.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582362/greenredplant.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582355/market.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582359/orange.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582361/otherredflower.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582364/pinkflower.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582366/pinkpurple.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582374/purpleplant.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/v1540582368/sepiaflowers.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/c_scale,w_1018/v1540582375/underwater.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/c_scale,w_901/v1540582373/river.jpg",
    width: 3,
    height: 4
  },
  {
    src:
      "https://res.cloudinary.com/dt0tfb4ni/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto/v1540582368/redflower.jpg",
    width: 1,
    height: 1
  }
];

class Home extends React.Component {
  constructor(props: string) {
    super(props);
  }

  public render() {
    return (
      <a>
      <Gallery photos={photos} direction={"column"} />
      </a>
    )
  }
}
export default Home;
