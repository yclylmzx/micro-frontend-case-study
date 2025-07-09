import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";

const UserCard = lazy(() => import("userCard/UserCard")),
  ContentBar = lazy(() => import("contentBar/ContentBar"));

export default function App() {
  return (
    <main className="container mx-auto max-[767px]:max-w-full max-[767px]:px-4">
      <Header />
      <Layout>
        <Suspense
          fallback={
            <div className="flex-1/3 flex justify-center items-center">
              Modül Yükleniyor...
            </div>
          }
        >
          <UserCard />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex-2/3 flex justify-center items-center">
              Modül Yükleniyor...
            </div>
          }
        >
          <ContentBar />
        </Suspense>
      </Layout>
    </main>
  );
}
