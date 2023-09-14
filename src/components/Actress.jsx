const Actress = ({ actress, handleSelectActress }) => {
  const { name, image, salary, role } = actress;
  return (
    <>
      <div className='text-white'>
        <div className='card w-96 border border-purple-600'>
          <figure className='px-10 pt-10'>
            <img src={image} className='rounded-full' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title font-bold'>{name}</h2>
            <div className='flex gap-5 text-xl font-semibold'>
              <p>Salary:{salary}$</p>
              <p>{role}</p>
            </div>
            <div className='card-actions'>
              <button
                onClick={() => handleSelectActress(actress)}
                className='btn btn-primary'
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actress;
