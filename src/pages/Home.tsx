import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="mx-4 mt-16 max-w-3xl md:mx-auto">
      <Header />

      <Form />

      <TodoList />

      <Footer />
    </div>
  );
}
