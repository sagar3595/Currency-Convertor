import {Box, Text} from '@chakra-ui/react';

const ConverterHeader = () => {
  return (
  <Box textAlign='center' color='white' marginTop='20' marginBottom='10'>
    <Text fontWeight='bold' fontSize='3xl'>
        Currency Convertor & Exchange Rates
    </Text>
    <Text fontWeight='light' fontSize='2xl'>Up to date FX rates</Text>
  </Box>
  );
};

export default ConverterHeader;