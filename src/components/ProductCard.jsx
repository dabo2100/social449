export default function ProductCard({ el, className }) {
  return (
    <div className={'card ' + className}>
      <figure>
        <img className="h-[400px] w-full object-contain" src={el.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Price : {el.price}</h2>
        <p>{el.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
