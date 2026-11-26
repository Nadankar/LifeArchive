

import { useAuth } from "@/context/AuthContext";
import LoginScreen from "@/pages/LoginScreen";
import { Redirect } from "expo-router";


export default function Index() { 
  const {loading,isAuthenticated}=useAuth();
 
  if(loading){
    return null;
  }

  if(isAuthenticated){
    return <Redirect href="/home"/> 
  } 
  
  return <LoginScreen/>
}