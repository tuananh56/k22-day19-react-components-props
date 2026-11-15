
function FAQItem({ faq, isOpen, onSelectFaq }) {
  const { id, question, answer, category, isHot } = faq;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Question */}
      <button
        type="button"
        onClick={() => onSelectFaq(id)}
        aria-expanded={isOpen}
        className="flex justify-between items-center gap-4 hover:bg-gray-50 p-5 w-full text-left transition"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-gray-800">
            {question}
          </span>

          {isHot && (
            <span className="bg-red-100 px-2 py-1 rounded-full font-bold text-red-600 text-xs">
              HOT
            </span>
          )}
        </div>

        <span className="text-gray-500 text-xl shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="px-5 pb-5">
          <div className="pt-4 border-gray-100 border-t">
            <span className="inline-block bg-blue-100 mb-3 px-3 py-1 rounded-full font-semibold text-blue-700 text-xs">
              {category}
            </span>

            <p className="text-gray-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
