interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  formId: string;
}

export default function FormProgress({
  currentStep,
  totalSteps,
  formId,
}: FormProgressProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-600">form id: {formId}</div>

      <div className="flex items-center space-x-4">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNumber = i + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    isCompleted
                      ? "bg-[#525EB1] text-white"
                      : isCurrent
                        ? "bg-[#525EB1] text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {isCompleted ? "✓" : stepNumber}
                </div>
                <span className="ml-2 text-sm">Step {stepNumber}</span>
              </div>
              {stepNumber < totalSteps && (
                <div
                  className={`w-8 h-0.5 mx-2 ${isCompleted ? "bg-[#525EB1]" : "bg-gray-200"}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
