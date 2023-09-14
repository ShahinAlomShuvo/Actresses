const CartItem = ({ items, idx }) => {
  const { name, image, salary } = items;
  return (
    <>
      <div>
        <div className='flex items-center gap-5 rounded-md bg-red-300 font-bold text-2xl border-purple-600 border mb-5 px-5 py-2'>
          {idx + 1}
          <img className='rounded-full w-14' src={image} />
          <h2>{name}</h2>
          <p className='text-white'>{salary} $ </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
