import { SelectedTicket, Tickets } from './index';
export default function Layout() {
  return (
    <div className="wrapper bg-mainBg-main h-screen">
      <div className="container pt-10 mx-auto flex justify-center ">
        <div className="w-3/5">
          <Tickets />
        </div>
        <div className="w-2/5">
          <SelectedTicket />
        </div>
      </div>
    </div>
  );
}
