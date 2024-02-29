export function FooterThree() {
  return (
    <section className=" w-full h-100 bottom-0 static overflow-hidden bg-black text-white fixed">
      <div className="container relative z-10 mx-auto px-54 ">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center ">
                <span className="ml-4  text-lg font-bold">Rahul Porel</span>
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a
                  className="font-medium text-white hover:text-gray-700"
                  href="https://github.com/RahulPorel"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-white hover:text-gray-700"
                  href="https://www.linkedin.com/in/rahulporel/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
