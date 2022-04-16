import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import { GithubProvider } from '../context/github/GithubContext'
import { AlertProvider } from '../context/alert/AlertContext'
function Home() {
    return ( 
        <GithubProvider>
            <AlertProvider>
                <UserSearch />
            </AlertProvider>
            <UserResults /> 
        </GithubProvider>
     );
}

export default Home;