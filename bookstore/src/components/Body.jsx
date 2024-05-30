import BooksContainer from "./BooksContainer";
import Form from "./Form";
import SectionHead from "./SectionHead";

export default function Body() {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <SectionHead />
          <BooksContainer />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </main>
  );
}
