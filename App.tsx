import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import {Auth,API,graphqlOperation} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useEffect } from 'react';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
const randomimages=[
'https://1.bp.blogspot.com/-LmfHmn0vowU/X4yEzgh6DHI/AAAAAAAAfOw/E1PI8dCa2qkBSPiDtSy6xUi2unxdQoUrACLcBGAsYHQ/s2048/sad%2Bdp%2B%25281%2529.jpg',
'https://wtspdp.com/wp-content/uploads/2021/04/Whatsapp-dp-statuis-dp-ote3-24-1024x1024.jpg?is-pending-load=1',
'http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/10/Alone-Boys-Whatsapp-DP-Pictures-Free.jpg',
'https://www.newsshare.in/wp-content/uploads/2/Girls-WhatsApp-DP-24.jpg',

]
function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const getRandomImage=()=>{
    return randomimages[Math.floor(Math.random() * randomimages.length)];
  }
  useEffect(()=>{
const fetchUser=async()=>{
const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
console.log(userInfo);
const userData=await API.graphql(
  graphqlOperation(getUser,{id:userInfo.attributes.sub})
)
if (userData.data.getUser){
  console.log("user already registered");
  return;
}
const newUser={
  id:userInfo.attributes.sub,
  name:userInfo.username,
  imageUri:getRandomImage(),
  status:'Busy...',

}
await API.graphql(graphqlOperation(
  createUser,
  {input:newUser}
))
}
fetchUser();
  },[])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)