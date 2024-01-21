import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    console.log(option);
    const{name,price,features}=option;
   
    
    return (
        <div className="relative h-[400px] w-[300px] rounded-md mx-auto bg-green-300 mb-4 ">
    
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {
            features.map((feature,index)=><Feature feature={feature} key={index}></Feature>)
          }
        </p>
        <p className='font-bold text-green-800'>${price}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-green-600">
          Pay &rarr;
        </button>
      </div>
    </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object
}
export default PriceOption;