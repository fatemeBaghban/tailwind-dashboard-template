// import Stepper from "../../components/stepper";

import { useState } from "react";
import Stepper from "../../components/stepper";

const steps = [
  {
    label: "Address",
    step: 1,
  },
  {
    label: "Shipping",
    step: 2,
  },
  {
    label: "Payment",
    step: 3,
  },
  {
    label: "Summary",
    step: 4,
  },
];

//   const [activeStep, setActiveStep] = useState(0);
//   const [isLastStep, setIsLastStep] = useState(false);
//   const [isFirstStep, setIsFirstStep] = useState(false);

//   const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
//   const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
const CustomersFilter = () => {
  //   const [activeStep, setActiveStep] = useState(0);

  //   const handleNext = () => {
  //     setActiveStep((prevStep) => (prevStep + 1) % steps.length);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  //   };

  //   return <Stepper steps={steps} />;
  //   const [activeStep, setActiveStep] = useState(0);

  //   const handleNext = () => {
  //     setActiveStep((prevStep) => (prevStep + 1) % steps.length);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  //   };

  // const [activeStep, setActiveStep] = useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  // };

  // const handleBack = () => {
  //   setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  // };

  const steps = [1, 2, 3, 4, 5];
  const activeStep = 2; // adjust this to the current active step
  return (
    <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
      {steps.map((step, index) => (
        <Stepper
          key={index}
          step={step}
          active={index + 1 === activeStep}
          completed={index + 1 < activeStep}
        />
      ))}
    </ol>

    // <ol class="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
    //   <li class="flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:start-4">
    //     <div class="block whitespace-nowrap z-10">
    //       <span class="w-6 h-6 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
    //         1
    //       </span>{" "}
    //       Step 1
    //     </div>
    //   </li>
    //   <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:start-4">
    //     <div class="block whitespace-nowrap z-10">
    //       <span class="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
    //         2
    //       </span>{" "}
    //       Step 2
    //     </div>
    //   </li>
    //   <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5  after:top-3 after:start-4">
    //     <div class="block whitespace-nowrap z-10">
    //       <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
    //         3
    //       </span>{" "}
    //       Step 3
    //     </div>
    //   </li>
    //   <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:start-4">
    //     <div class="block whitespace-nowrap z-10">
    //       <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
    //         4
    //       </span>{" "}
    //       Step 4
    //     </div>
    //   </li>
    //   <li class="flex w-full relative text-gray-900  ">
    //     <div class="block whitespace-nowrap z-10">
    //       <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
    //         5
    //       </span>{" "}
    //       Step 5
    //     </div>
    //   </li>
    // </ol>

    // <div className="flex flex-col w-full">
    //   <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
    //     {steps.map((step, index) => (
    //       <li
    //         key={index}
    //         className={
    //           ("flex w-full relative",
    //           index < activeStep ? "text-indigo-600" : "text-gray-900",
    //           index < activeStep - 1
    //             ? "after:bg-gray-200"
    //             : "after:bg-indigo-600",
    //           index === activeStep
    //             ? "after:bg-indigo-600"
    //             : "after:bg-gray-200")
    //         }
    //       >
    //         <div className="block whitespace-nowrap z-10">
    //           <span
    //             className={
    //               ("w-6 h-6 bg-indigo-50 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10",
    //               index < activeStep ? "bg-indigo-600" : "bg-gray-50")
    //             }
    //           >
    //             {index + 1}
    //           </span>
    //           <span className="ml-4">Step {index + 1}</span>
    //         </div>
    //         <div
    //           className={
    //             ("absolute top-3 h-0.5 w-full after:inline-block after:absolute after:left-4 lg:after:top-5",
    //             index < activeStep - 1
    //               ? "after:bg-gray-200"
    //               : "after:bg-indigo-600")
    //           }
    //         />
    //       </li>
    //     ))}
    //     <li className="flex w-full relative text-gray-900">
    //       <div className="block whitespace-nowrap z-10">
    //         <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
    //           {steps.length}
    //         </span>
    //         <span className="ml-4">Step {steps.length}</span>
    //       </div>
    //     </li>
    //     <div className="mt-8 flex flex-row justify-end space-x-4">
    //       {activeStep > 0 && (
    //         <button
    //           className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
    //           onClick={handleBack}
    //         >
    //           Back
    //         </button>
    //       )}
    //       {activeStep < steps.length - 1 && (
    //         <button
    //           className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    //           onClick={handleNext}
    //         >
    //           Next
    //         </button>
    //       )}
    //     </div>
    //   </ol>
    // </div>
  );
  // <ol class="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
  //   <li class="flex w-full relative text-indigo-600  before:content-['']  before:w-full before:h-0.5   before:bg-indigo-600 before:inline-block before:absolute lg:before:top-5 before:top-3 before:left-4">
  //     <div class="block whitespace-nowrap z-10">
  //       <span class="w-6 h-6 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
  //         1
  //       </span>{" "}
  //       Step 1
  //     </div>
  //   </li>
  //   <li class="flex w-full relative text-gray-900  before:content-['']  before:w-full before:h-0.5  before:bg-gray-200 before:inline-block before:absolute lg:before:top-5 before:top-3 before:left-4">
  //     <div class="block whitespace-nowrap z-10">
  //       <span class="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
  //         2
  //       </span>{" "}
  //       Step 2
  //     </div>
  //   </li>
  //   <li class="flex w-full relative text-gray-900  before:content-['']  before:w-full before:h-0.5  before:bg-gray-200 before:inline-block before:absolute lg:before:top-5  before:top-3 before:left-4">
  //     <div class="block whitespace-nowrap z-10">
  //       <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
  //         3
  //       </span>{" "}
  //       Step 3
  //     </div>
  //   </li>
  //   <li class="flex w-full relative text-gray-900  before:content-['']  before:w-full before:h-0.5  before:bg-gray-200 before:inline-block before:absolute lg:before:top-5 before:top-3 before:left-4">
  //     <div class="block whitespace-nowrap z-10">
  //       <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
  //         4
  //       </span>{" "}
  //       Step 4
  //     </div>
  //   </li>
  //   <li class="flex w-full relative text-gray-900  ">
  //     <div class="block whitespace-nowrap z-10">
  //       <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
  //         5
  //       </span>{" "}
  //       Step 5
  //     </div>
  //   </li>
  // </ol>
};
export default CustomersFilter;
