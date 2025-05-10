import { WidgetsGrid } from "@/components";

export const metadata = {
 title: 'Admin dashboard',
 description: 'Admin dashboard',
};

const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-3xl">Información general</span>

      <WidgetsGrid />
    </div>
  )
}

export default MainPage