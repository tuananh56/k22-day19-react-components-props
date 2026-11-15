
import UserProfileCard from "./components/user/UserProfileCard";
import ProductList from "./components/product/ProductList";
import products from "./data/products";
import faqData from "./data/faqData";
import FAQ from "./components/faq/FAQ";

function App() {
  return (
    <div className="bg-gray-100 p-6 sm:p-10 min-h-screen">
      <div className="space-y-12 mx-auto max-w-6xl">

        {/* BÀI 1 */}
        <section>
          <h1 className="mb-6 font-bold text-2xl">
            Bài 1: User Profile Card
          </h1>

          <div className="flex flex-wrap justify-center gap-8">
            <UserProfileCard
              avatar="https://i.pravatar.cc/150?img=12"
              fullName="Nguyễn Văn An"
              jobTitle="Frontend Developer"
              isOnline={true}
              skills={["React", "JavaScript", "Tailwind"]}
            />

            <UserProfileCard
              avatar="https://i.pravatar.cc/150?img=47"
              fullName="Trần Thị Bình"
              jobTitle="Backend Developer"
              isOnline={false}
              skills={["Node.js", "Express", "MongoDB"]}
            />
          </div>
        </section>

        {/* BÀI 2 */}
        <section>
          <h1 className="mb-6 font-bold text-2xl">
            Bài 2: Product List
          </h1>

          <ProductList products={products} />
        </section>

        {/* BÀI 3 */}
        <section>
          <h1 className="mb-6 font-bold text-2xl">
            Bài 3: FAQ Accordion
          </h1>

         <FAQ faqData={faqData} />
        </section>

      </div>
    </div>
  );
}

export default App;
