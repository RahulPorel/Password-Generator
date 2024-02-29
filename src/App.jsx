import { useState, useCallback, useEffect, useRef } from "react";

import { FooterThree } from "./Footer";
function App() {
  const [passLength, setPassLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_`+=";

    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [passLength, numAllowed, charAllowed, setPassword]);

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    generatePassword();
  }, [passLength, numAllowed, charAllowed]);

  const hidePass = () => {
    const passInput = document.getElementById("passInput");
    const toggleShowEyeIcon = document.querySelector("#showEye");
    const toggleHideEyeIcon = document.querySelector("#hideEye");
    if (passInput.type === "text") {
      passInput.type = "password";
      toggleShowEyeIcon.style.display = "inline";
      toggleHideEyeIcon.style.display = "none";
    } else {
      passInput.type = "text";
      toggleShowEyeIcon.style.display = "none";
      toggleHideEyeIcon.style.display = "inline";
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-7 py-5 mt-20 text-white  bg-gray-700">
        <h3
          className="text-white text-center py-3 cursor-not-allowed select-none"
          style={{ fontWeight: "700", color: "lightblue" }}
        >
          <i className="fa-solid fa-unlock"></i> Password Generator
        </h3>
        <div className="flex shadow text-black rounded-lg overflow-hidden mb-8">
          <input
            style={{ fontWeight: 500, fontSize: 20 }}
            type="text"
            value={password}
            className="outline-none w-full py-3  px-4"
            placeholder="Strong Password"
            readOnly
            id="passInput"
            ref={passwordRef}
          />
          <button onClick={hidePass} className="eye" id="hideEye">
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button
            onClick={hidePass}
            className="eye"
            id="showEye"
            style={{ display: "none" }}
          >
            <i className="fa-solid fa-eye"></i>
          </button>

          <button
            onClick={copyPassToClip}
            className="outline-none px-3 py-0.5 shrink-0 bg-gray-800 copy-to-clip-btn"
          >
            <i className="fa-regular fa-copy" style={{ color: "white" }}></i>
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-2">
            {" "}
            <label
              style={{ fontSize: 19 }}
              className="cursor-not-allowed select-none "
              htmlFor="range"
            >
              Length {passLength}
            </label>
            <input
              style={{ display: "inline", textAlign: "center" }}
              type="range"
              min="6" max="65"
              className="m-2 w-70 h-2 rounded-lg appearance-none cursor-e-resize"
              id="range"
              onChange={(e) => {
                setPassLength(e.target.value);
              }}
            />
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              className="w-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label
              style={{ fontSize: 19 }}
              className="cursor-not-allowed select-none"
              htmlFor="numInput"
            >
              1-9
            </label>
          </div>
          <div className="flex item-center  gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="w-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label
              style={{ fontSize: 19 }}
              className="cursor-not-allowed select-none "
              htmlFor="charInput"
            >
              $#@*
            </label>
          </div>
        </div>
      </div>

      <FooterThree />
    </>
  );
}

export default App;
