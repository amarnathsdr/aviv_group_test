function NotFound(){
  return (
    <div className="flex items-center justify-center bg-red-100 h-screen">
      <div className="flex flex-col items-end bg-white p-20 hover:bg-red-100">
          <span className="text-3xl font-bold"> Adventure is great ! </span>
          <span className='text-xs'>but not in non existant pages :P</span>
      </div>
    </div>
  );
}
export default NotFound;