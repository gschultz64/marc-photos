import * as React from "react";
import * as Gallery from "react-photo-gallery";

// export interface Props {
  
// }

const photos = [
  {
    src: ".../public/images/beachshell.jpg",
    width: 4,
    height: 3
  },
  {
    src: ".../public/images/beachshell.jpg",
    width: 1,
    height: 1
  },
  {
    src: ".../public/images/beachshell.jpg",
    width: 3,
    height: 4
  },
  {
    src: ".../public/images/beachshell.jpg",
    width: 3,
    height: 4
  },
  {
    src: ".../public/images/beachshell.jpg",
    width: 4,
    height: 3
  }
]

class Home extends React.Component {
  constructor(props:string) {
    super(props)
  }

  public render() {
    return (
      <Gallery photos={photos} direction={"column"}/>
    )
  }
}
export default Home;
