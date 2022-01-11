import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Navigation from "../../Utils/Navigation";
import Footer from "../../Utils/Footer";
import './SplashPage.css'

function SplashPage() {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) return (
        <Redirect to='/' />
    )

    return (
        <div className='splash'>
            <Footer />
        </div>
    )
}


export default SplashPage