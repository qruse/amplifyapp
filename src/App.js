import { withAuthenticator, Button, Text, Heading, TextField, Flex} from '@aws-amplify/ui-react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
/* src/App.js */

function App({signOut, user}) {
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
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
        <Button class="merge" onClick={signOut}> 
          Sign out
        </Button>
      </div>

      <Heading style={{textAlign: "left"}} level={4}>
        데이터 업로드
      </Heading>
      <Flex>
        <TextField label="File1" type="file"/>
      </Flex>
      <Flex>
        <TextField label="File2" type="file"/>
      </Flex>

      <br></br>
      <ColoredLine color="gray" />
      <br></br>
      <Heading style={{textAlign: "left"}} level={4}>
        데이터 가공/통합
      </Heading>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <Button class="merge"> 
          merge
        </Button>
      </div>
      <br></br>
      <br></br>
      <Heading style={{textAlign: "left"}} level={4}>
        데이터 조회
      </Heading>
      <br></br>
      <Table title="Table">
        <TableHead>
          <TableRow>
            <TableCell as="th">ID</TableCell>
            <TableCell as="th">recordtime</TableCell>
            <TableCell as="th">Location_name</TableCell>
            <TableCell as="th">Latitude</TableCell>
            <TableCell as="th">Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>*DdSfwe8f*F*DS9</TableCell>
            <TableCell>2022-06-29 12:30</TableCell>
            <TableCell>동부 연안</TableCell>
            <TableCell>37.510</TableCell>
            <TableCell>129.131</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>A3SDG2e45!2$235</TableCell>
            <TableCell>2022-06-29 12:40</TableCell>
            <TableCell>동부 연안</TableCell>
            <TableCell>37.510</TableCell>
            <TableCell>129.131</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <br></br>
      <ColoredLine color="gray" />
      <br></br>

      <Heading style={{textAlign: "center"}} level={4}>
        DB 등록
      </Heading>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button class="merge"> 
          register
        </Button>
      </div>

    </>
  );
}

export default withAuthenticator(App);
