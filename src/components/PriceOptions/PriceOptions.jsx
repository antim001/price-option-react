
import PriceOption from '../PticeOption/PriceOption';
const PriceOptions = () => {
    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "img":'https://ibb.co/cJcC3dw',
          "features": [
            "Access to basic gym facilities",
            "Limited class participation",
            "No personal trainer sessions"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "img":'https://ibb.co/cCRVGLk',
          "features": [
            "Full access to gym facilities",
            "Unlimited class participation",
            "Limited personal trainer sessions"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "img":'https://ibb.co/ZxFGdWS',
          "features": [
            "Full access to gym facilities",
            "Unlimited class participation",
            "Priority scheduling for personal trainer sessions"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 99.99,
          "img":'https://ibb.co/fF9G9vt',
          "features": [
            "Full access for the entire family",
            "Unlimited class participation",
            "Discounts on personal trainer sessions"
          ]
        },
        {
          "id": 5,
          "name": "Corporate Membership",
          "price": 149.99,
           "img":'https://ibb.co/cCRVGLk',
          "features": [
            "Special rates for corporate groups",
            "Full access to gym facilities",
            "Priority scheduling for personal trainer sessions"
          ]
        }
      ];
    return (
       
        <div>
           <h1 className='mb-4 mt-4 text-4xl text-orange-400'>Best Gym membership price</h1> 
           <div className='md:grid grid-cols-3'>
           {
            priceOptions.map(option=><PriceOption  key={option.id} option={option}></PriceOption>)
           }
           </div>
        </div>
    );
};

export default PriceOptions;