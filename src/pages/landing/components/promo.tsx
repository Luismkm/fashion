export function Promo() {
  return (
    <section className="max-w-[1490px] mx-auto flex flex-col justify-center items-center bg-yellow-550 h-[450px]">
      <h3 className="font-black text-white-100 text-5xl text-center leading-[60px]">
        JOIN SHOPPING COMMUNITY TO
        {' '}
        <br />
        {' '}
        GET MONTHLY PROMO
      </h3>
      <p className="text-white-100 text-xl mt-5">
        Type your email down below and be young wild generation
      </p>
      <div className="w-[370px] h-[64px] bg-white-100 flex justify-center items-center rounded-[10px] mt-9">
        <form className="flex justify-center items-center">
          <input type="text" placeholder="Add your email here" className="p-5 w-[254px] h-[64px] outline-none" />
          <button type="submit" className="bg-black-900 text-white-100 font-medium text-xl py-2 px-6 rounded-lg">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}
