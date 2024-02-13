import CardList from "./_components/cardList/CardList";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-140px)]">
      <h1 className="font-bold underline mb-3 text-lg sm:text-xl">All Posts</h1>
      <CardList />
    </div>
  );
}
