import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
function Heading() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Converter</i>",
        "<i>&#8377;</i>",
        "&dollar;",
        "&#8364;",
        " &yen;",
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <h1 className=" p-4 text-4xl bg-gray-200 rounded-md text-center text-black mb-2">
        Welcome To Currency <span ref={el}></span> :-
      </h1>
    </>
  );
}

export default Heading;
