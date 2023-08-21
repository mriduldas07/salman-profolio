export default function BlogCard() {
  return (
    <div className="card max-w-[350px] bg-[#FFE3BF] shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
      </div>
    </div>
  );
}
