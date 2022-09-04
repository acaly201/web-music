import PropTypes from 'prop-types';
function Home({children}){
    return (
        <div>
            {children}
        </div>

    )
}
Home.propTypes = {
    children: PropTypes.node.isRequired,
 };
export default Home