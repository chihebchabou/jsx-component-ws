import adventure from './adventure.jpg';
import experience from './experience.jpg';
import restaurant from './restaurant.jpg';
import stay from './stay.jpg';

const CategoryList = () => {
  const categories = [
    {
      categoryName: 'Stays',
      description: 'Homes, Boutique & more',
      image: stay,
    },
    {
      categoryName: 'Experiences',
      description: 'Activities hosted by locals',
      image: experience,
    },
    {
      categoryName: 'Adventures',
      description: 'Hosted trips including lodging',
      image: adventure,
    },
    {
      categoryName: 'Restaurants',
      description: 'Popular spots to eat & drink',
      image: restaurant,
    },
  ];
  return (
    <div className="container pt-4">
      <div className="row">
        {categories.map((category, i) => (
          <div className="col-md-3" key={i}>
            <div className="card">
              <img
                style={{ height: 200, objectFit: 'cover' }}
                src={category.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title text-primary">
                  {category.categoryName}
                </h3>
                <p className="card-text">{category.description}</p>
                <a href="#!" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
