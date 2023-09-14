import { useRef, useState } from "react";
import Actresses from "./components/Actresses";
import Cart from "./components/Cart";

const App = () => {
  const [selectActress, setSelectActress] = useState([]);
  const [remainingBudget, setRemainingBudget] = useState(30000);

  const handleSelectActress = (actress) => {
    const isExist = selectActress.find(
      (selectedActress) => actress.id === selectedActress.id
    );
    if (isExist) {
      return alert("Actress already selected");
    }

    const updatedBudget = remainingBudget - actress.salary;

    if (updatedBudget < 0) {
      return alert("Not enough budget to select this actress");
    }

    setRemainingBudget(updatedBudget);
    setSelectActress([...selectActress, actress]);
  };

  return (
    <>
      <div className="bg-cover bg-center h-full bg-fixed bg-no-repeat bg-[url('https://images2.alphacoders.com/589/thumb-1920-589553.png')]">
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-3 '>
            <Actresses handleSelectActress={handleSelectActress}></Actresses>
            <Cart
              selectActress={selectActress}
              remainingBudget={remainingBudget}
            ></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
