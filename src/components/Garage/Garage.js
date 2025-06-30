import Car from './Car';
import './Garage.css'; 

function Garage(props) {
  const cars = props.cars;

  return (
    <div className="garage">
      <h1>Who lives in my garage?</h1>
      {cars.length > 0 ? (
        <>
          <h2>You have {cars.length} cars in your garage.</h2>
          <ul>
            {cars.map((car) => (
              <Car key={car.id} brand={car.brand} />
            ))}
          </ul>
        </>
      ) : (
        <h2>No cars in the garage.</h2>
      )}
    </div>
  );
}

export default Garage;
