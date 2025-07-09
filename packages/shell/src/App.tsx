import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";

// @ts-ignore
const UserCard = lazy(() => import("userCard/UserCard"));

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
        <div className="flex-2/3">
          <article className="p-4 border rounded-lg hover:shadow transition bg-white">
            <h2 className="font-semibold text-lg text-gray-800 mb-1">title</h2>
            <p className="text-sm text-gray-600 mb-2">açıklama</p>
            <time className="text-sm text-gray-500 flex items-center gap-1">
              {/* 📅 {new Date(data.date).toLocaleDateString("tr-TR")} */} saat
            </time>
          </article>
        </div>
      </Layout>
    </main>
  );
}
