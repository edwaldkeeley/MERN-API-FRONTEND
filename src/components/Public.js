import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Edwald API</span></h1>
            </header>
            <main className="public__main">
                <p>This is a Test Mern Stack API That is Public </p>
                <address className="public__addr">
                    This API Contains<br />
                    Notes<br />
                    And<br />
                    Users
                </address>
                <br />
                <p>Made By: Edwald</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public