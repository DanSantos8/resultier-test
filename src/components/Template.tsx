import Sidebar from "./Sidebar"

export default function Template({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <main className="flex flex-1 min-h-screen">
      <Sidebar />
      <section className="p-4 flex flex-col min-w-[1024px] gap-10">
        {children}
      </section>
    </main>
  )
}
