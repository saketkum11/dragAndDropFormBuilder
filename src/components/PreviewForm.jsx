import PreviewWidgets from "./PreviewWidgets";

/* eslint-disable react/prop-types */
const PreviewForm = ({ setPreviewToggle, allWidgets }) => {
  const handleTogglePreview = () => {
    setPreviewToggle((flag) => !flag);
  };
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 "></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto text-white">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-zinc-800 text-left shadow-xl  sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-4 py-4 flex flex-col gap-4">
              {[...allWidgets].map((widget) => {
                return (
                  <>
                    <PreviewWidgets widget={widget} />
                  </>
                );
              })}
            </div>
            <div className="bg-zinc-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleTogglePreview}
                className="mt-3  w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
