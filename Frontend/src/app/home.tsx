import HomePage from "@/pages/HomePage";
import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";


function Home(){
    const {user,loading,isAuthenticated}=useAuth();

    if(loading){
        return null;
    }

    if(!isAuthenticated){
        return <Redirect href="/"/>
    } 

    return <HomePage/>
}


export default Home;