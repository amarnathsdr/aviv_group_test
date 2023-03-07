import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center bg-violet-100 h-screen">
      <div className="flex flex-col items-end bg-white p-20 hover:bg-violet-100">
        <span className="text-3xl font-bold italic">
          Let's try
          <Link to="/realtors">
            <span className="underline cursor-pointer ml-1">the technical test </span>
          </Link>
        </span>
        <span className="text-xs">Done by Amarnath Sundaram</span>
      </div>
    </div>
  );
}
export default Home;
