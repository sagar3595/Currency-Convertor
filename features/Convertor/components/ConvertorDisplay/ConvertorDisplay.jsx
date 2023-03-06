import {Box, Text} from '@chakra-ui/react';


const ConvertorDisplay = ({
    amount,
    
    currencyOne,
    currencyTwo,
    convertedAmount,
    date,
    time,
}) => {
  return (
<Box textAlign='right'>
<Text fontSize='lg' fontWeight='bold'>
    {amount} {currencyOne}
</Text>
<Text fontSize='2xl' fontWeight='bold' color='purple.500'>
    {convertedAmount} {currencyTwo}
</Text>
<Text fontSize='xs' color='gray.400'>
    Market rates collected - {date} {time}
    </Text>
</Box>
  );
  };

export default ConvertorDisplay