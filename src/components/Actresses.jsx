import { useEffect } from "react";
import { useState } from "react";
import Actress from "./Actress";

const Actresses = ({ handleSelectActress }) => {
  const [actresses, setActresses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActresses(data));
  }, []);

  return (
    <>
      <div className='col-span-2  flex flex-wrap gap-5 justify-center'>
        {actresses.map((actress) => (
          <Actress
            key={actress.id}
            actress={actress}
            handleSelectActress={handleSelectActress}
          ></Actress>
        ))}
      </div>
    </>
  );
};

export default Actresses;
