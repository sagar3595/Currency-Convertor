import Convertor from "../features/Convertor/Convertor";
import {Flex} from '@chakra-ui/react';

function App() {
  return (
    <>
    <Flex bgGradient='linear(to-t, #ae085c, #2e0656)' 
    height='100vh'
    justifyContent='center'
    >  
      <Convertor />
      </Flex>
    </>
  );
}

export default App;
