import CartItem from "./CartItem";

const Cart = ({ selectActress, remainingBudget }) => {
  return (
    <>
      <div>
        <div>
          <div className='rounded-md bg-red-300 font-bold text-2xl border-purple-600 border mb-5 px-5 py-2'>
            <h2>Remaining Budget:{remainingBudget} </h2>
          </div>
        </div>
        {selectActress.map((items, idx) => (
          <CartItem key={items.id} items={items} idx={idx}></CartItem>
        ))}
      </div>
    </>
  );
};

export default Cart;
