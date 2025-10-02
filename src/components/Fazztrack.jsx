const Fazztrack = () => {
  return (
    <>
      <div className="flex justify-between gap-10 mt-2  items-center lg:px-50 ">
        <div className="flex justify-center">
          <img
            src="src/assets/fazztrack.png"
            alt="fazztrack"
            className="w-20 h-20 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl mb-1 ">fazztrack</h1>
            <p className="text-gray-600 text-sm leading-relaxed w-96">
              Belajar menjadi software engineer secara online/remote selama 3-6
              bulan sampai diterima kerja, tanpa bayar di depan (ISA)
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <p>9 followers</p>
              <p>9 following</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center"></div>

        <div className="flex justify-center">
          <button className="cursor-pointer bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Follow
          </button>
        </div>
      </div>
      <div className="flex w-60 mx-47 mt-4 ">
        <div className="grid grid-cols-2 ">
          <div className="px-5">
            <button className="cursor-pointer text-sm text-slate-500">
              Tutorial
            </button>
          </div>
          <button className="cursor-pointer text-sm flex flex-col pt-1 text-slate-500">
            Daftar sekarang
            <div className="border-b-1 mt-2"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Fazztrack;
