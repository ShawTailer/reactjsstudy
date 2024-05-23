import { Link } from 'react-router-dom';
const HomePage=() =>{
    return<>
        <div style={{color: 'blue',fontSize:'25px'}}>
            Hi
        </div> 
        <Link to="/user">
                <button style={{ marginTop: '10px' }}>
                    Go to User Page
                </button>
        </Link>
    </>
};
export default HomePage;