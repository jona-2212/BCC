const FrameComponent = () => {
    return (
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-31px_0 max-w-full mq800:gap-15px_0">
        <div className="self-stretch flex flex-col items-start justify-start gap-20px_0">
          <h1 className="display= flex">
            Masuk ke BizConnect
          </h1>
          <div className="self-stretch h-3.5 relative text-xl font-body-small text-text text-left inline-block shrink-0 mq450:text-base">
            Silahkan masukkan informasi akun kamu.
          </div>
        </div>
        <div className="w-500px rounded-3xs bg-tertiary box-border flex flex-row items-start justify-start py-23px px-4 max-w-full border-1.5px border-solid border-primary">
          <input
            className="w-178px border-none outline-none bg-transparent h-3.5 flex flex-row items-start justify-start p-2 box-border font-body-small text-xl text-primary"
            placeholder="Email"
            type="text"
          />
        </div>
        <div className="w-500px flex flex-col items-start justify-start gap-8px_0 max-w-full">
          <div className="self-stretch rounded-3xs bg-tertiary flex flex-row items-start justify-start py-23px px-4 border-1.5px border-solid border-primary">
            <input
              className="w-178px border-none outline-none bg-transparent h-3.5 flex flex-row items-start justify-start p-2 box-border font-body-small text-xl text-primary"
              placeholder="Password"
              type="password" // Change type to "password"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-20px mq450:flex-wrap">
            <div className="w-135px flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start p-2">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/check-box.svg"
                />
              </div>
              <div className="h-11 flex-1 relative text-base font-body-small text-text text-center inline-block">
                Ingat Saya?
              </div>
            </div>
            <div className="h-7 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative text-base font-body-small text-text text-right inline-block">
                <a href="#">Lupa password?</a> {/* Change to a link */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-500px flex flex-col items-center justify-start gap-24px_0 max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-16px_0">
            <button className="cursor-pointer border-none py-4 px-8 bg-primary self-stretch h-60px rounded-lg flex flex-row items-center justify-center box-border hover:bg-orangered">
              <div className="h-15 w-73 relative text-3xl font-medium font-body-small text-tertiary text-center inline-block mq450:text-lg">
                Masuk
              </div>
            </button>
            <div className="h-11 relative text-base font-body-small text-black text-right inline-block">
              Atau
            </div>
            <button className="cursor-pointer border-none py-2 px-4 bg-primary self-stretch h-72px rounded-3xs flex flex-row items-center justify-center box-border">
              <div className="flex flex-col items-start justify-start p-2">
                <img
                  className="w-10 h-10 relative overflow-hidden shrink-0"
                  alt=""
                  src="/social-media.svg"
                />
              </div>
              <div className="h-8 flex flex-row items-center justify-center p-2 box-border">
                <div className="self-stretch relative text-3xl font-medium font-body-small text-tertiary text-left mq450:text-lg">
                  Masuk dengan Google
                </div>
              </div>
            </button>
          </div>
          <div className="w-323px flex flex-row items-start justify-center max-w-full row-gap-20px mq450:flex-wrap">
            <div className="flex-1 flex flex-row items-center justify-center p-2 box-border min-w-123px">
              <div className="h-11 flex-1 relative text-base font-body-small text-text text-center inline-block">
                Belum memiliki akun? <a href="#">Daftar Sekarang</a> {/* Change to a link */}
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };
  