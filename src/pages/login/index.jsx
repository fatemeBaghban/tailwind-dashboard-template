import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { getcaptcha } from "../../service/api/login";
import { onRun } from "../../service/confing";

const Login = () => {
  const [phone, setPhone] = useState();
  const [captcha, setCaptcha] = useState();
  const [imageCaptcha, setImageCaptcha] = useState(null);
  const [encryptedResponse, setEncryptedResponse] = useState(null);
  const [password, setPassword] = useState();
  const [step, setStep] = useState(1);
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  const router = useNavigate();

  const fetcher = (url) =>
    axios.get(url).then((response) => {
      response.data;
    });

  const { data, error, isLoading } = useSWR(`${onRun}/captcha`, fetcher);

  console.log("dataaa", data);
  // `/?phone=${phone}&password=${password}`,
  // fetcher(`${onRun}/getcaptcha`)

  // useEffect(getcaptcha, []);
  // const getCaptcha = () => {
  //   axios.get(``);
  // };

  const handleSubmit = () => {
    router("/");
    // if (step == 1) {
    //   axios
    //     .post(OnRun + "", {
    //       mobile: phone,
    //       captcha: captcha,
    //       // encrypted_response: encrypted_response,
    //     })
    //     .then(() => {
    //       setStep(2);
    //     })
    //     .catch((erorr) => {
    //       alert(erorr.response.data.message);
    //     });
    // } else {
    //   axios
    //     .post(OnRun + "", { mobile: mobile, code: code })
    //     .then((response) => {
    //       Cookies.set("user", response.data._id, {
    //         expires: 1,
    //       });
    //     })
    //     .catch((erorr) => {
    //       alert(erorr.response.data.message);
    //     });
    // }
  };
  // if (isLoading) {
  //   return <div>is Loading...</div>;
  // }
  // if(error){
  //   return <div>{error.message}</div>
  // }
  return (
    <div className="h-screen bg-white text-black ">
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ورود
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  شماره‌ موبایل
                </label>
                <div className="mt-2">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    name="phone"
                    maxLength={11}
                    type="tel"
                    autoComplete="09909990000"
                    required
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {step === 1 ? (
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      کپچا
                    </label>
                    {/* <div className="text-sm">
                      <a
                        href="/"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        فراموشی رمز
                      </a>
                    </div> */}
                  </div>
                  <div>
                    {/* {imageCaptcha ? (
                      <img
                        alt="captcha"
                        onClick={handleCaptcha}
                        height={100}
                        width={150}
                        src={`data:image/png;base64,${data.image}`}
                        className="w-full h-20 p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                      />
                    ) : null} */}
                    {imageCaptcha ? (
                      <img
                        onClick={(e) => console.log("lklkl", e)}
                        src={`data:image/png;base64,${data.image}`}
                        className="w-full text-sm focus:outline-none border border-gray-200 rounded text-gray-600"
                        type="text"
                        placeholder="کد کپچا"
                      />
                    ) : null}
                  </div>
                  <div className="mt-2">
                    <input
                      maxLength={6}
                      name="captcha"
                      type="text"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              ) : (
                // <div>
                //   <input
                //     value={opt}
                //     maxLength={5}
                //     onChange={(e) => setOpt(e.target.value)}
                //     className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                //     type="text"
                //     placeholder="کد تایید"
                //   />
                // </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      رمزعبور
                    </label>
                    <div className="text-sm">
                      <a
                        href="/"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        فراموشی رمز
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      name="password"
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              )}
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ورود
                </button>
                {/* {error && <p>{error.message}</p>} */}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Login;
