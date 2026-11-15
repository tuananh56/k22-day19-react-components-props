
import { useState } from "react";
import FAQItem from "./FAQItem";

function FAQ({ faqData }) {
  const [selectedFaqId, setSelectedFaqId] = useState(null);

  const handleSelectFaq = (id) => {
    setSelectedFaqId((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <div className="space-y-4">
      {faqData.length > 0 && (
        faqData.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={selectedFaqId === faq.id}
            onSelectFaq={handleSelectFaq}
          />
        ))
      )}

      {faqData.length === 0 && (
        <p className="py-8 text-gray-500 text-center">
          Chưa có câu hỏi nào.
        </p>
      )}
    </div>
  );
}

export default FAQ;
