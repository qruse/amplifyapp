import { withAuthenticator, Button, Text, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

/* src/App.js */
function App({signOut, user}) {
  // Todo logic here
  return (
    <>
      {/* Add Todo JSX here  */}
      <Heading style={{textAlign: "center"}} level={1}>
        Oden Amplifyapp Test
      </Heading>
      
      <Text adjustsFontSizeToFit={true} style={{textAlign: "right"}}>
        ID: {user.username} 
        <br></br>
      </Text>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={signOut} style={{display: "flex"}} size={"small"}> 
          Sign out
        </Button>
      </div>

      <>
      <Text adjustsFontSizeToFit={true} style={{textAlign: "Left"}} fontSize="2rem">
        데이터 업로드
      </Text> 
      <br></br>
      <Button style={{display: "flex"}} size={"small"}> 
          File 1
      </Button>

      </>
    </>
  );
}

export default withAuthenticator(App);

