import { Link } from 'react-router-dom';

const HomePage=() =>{
    return<>
    <div className='container'> 
        <div style={{color: 'blue',fontSize:'25px'}}>
            Hi
        </div> 
        <Link to="/user">
                <button style={{ marginTop: '10px' }}>
                    Go to Admin Page
                </button>
        </Link>
    </div>
    </>
};
export default HomePage;