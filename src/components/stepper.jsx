import { useState } from "react";

const Stepper = ({ step, active, completed }) => {
  // const [activeStep, setActiveStep] = useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  // };

  // const handleBack = () => {
  //   setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  // };
  const stepClass = active ? "text-indigo-600" : "text-gray-900";
  const circleClass = active ? "bg-indigo-600" : "bg-gray-50";
  const borderColor = active ? "border-indigo-600" : "border-gray-200";
  return (
    <li
      // className={`flex w-full relative after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:start-4 ${stepClass}`}
    >
      <div className="block whitespace-nowrap z-10">
        <span
          className={`w-8 h-8 ${circleClass} border-2 ${borderColor} rounded-full flex justify-center items-center mx-auto mb-3 text-sm ${
            active ? "text-white" : "text-indigo-600"
          } lg:w-16 lg:h-16 lg:mx-5`}
        >
          {step}
        </span>{" "}
        مرحله {step}
      </div>
      {completed && (
        <div className="absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:start-4" />
      )}
    </li>
    // <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
    //   {steps.map((step, index) => (
    //     <li
    //       key={index}
    //       className={(
    //         "flex w-full relative",
    //         index < activeStep ? "text-indigo-600" : "text-gray-900",
    //         index < activeStep - 1
    //           ? "after:bg-gray-200"
    //           : "after:bg-indigo-600",
    //         index === activeStep ? "after:bg-indigo-600" : "after:bg-gray-200"
    //       )}
    //     >
    //       <div className="block whitespace-nowrap z-10">
    //         <span
    //           className={classNames(
    //             "w-6 h-6 bg-indigo-50 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10",
    //             index < activeStep ? "bg-indigo-600" : "bg-gray-50"
    //           )}
    //         >
    //           {index + 1}
    //         </span>
    //         <span className="ml-4">Step {index + 1}</span>
    //       </div>
    //       <div
    //         className={classNames(
    //           "absolute top-3 h-0.5 w-full after:inline-block after:absolute after:left-4 lg:after:top-5",
    //           index < activeStep - 1
    //             ? "after:bg-gray-200"
    //             : "after:bg-indigo-600"
    //         )}
    //       />
    //     </li>
    //   ))}
    //   <li className="flex w-full relative text-gray-900">
    //     <div className="block whitespace-nowrap z-10">
    //       <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
    //         {steps.length}
    //       </span>
    //       <span className="ml-4">Step {steps.length}</span>
    //     </div>
    //   </li>
    //   <div className="mt-8 flex flex-row justify-end space-x-4">
    //     {activeStep > 0 && (
    //       <button
    //         className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
    //         onClick={handleBack}
    //       >
    //         Back
    //       </button>
    //     )}
    //     {activeStep < steps.length - 1 && (
    //       <button
    //         className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    //         onClick={handleNext}
    //       >
    //         Next
    //       </button>
    //     )}
    //   </div>
    // </ol>
  );
};
export default Stepper;
