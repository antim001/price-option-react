
import PropTypes from 'prop-types';
import { FaHandPointRight } from "react-icons/fa";

const Feature = ({feature}) => {
   
    return (
        <div >
            <p className='font-semibold flex items-center '>
                <FaHandPointRight className='mr-2'></FaHandPointRight>
                {feature}
            </p>
        </div>
    );
};


Feature.propTypes={
    feature:PropTypes.array
}
export default Feature;