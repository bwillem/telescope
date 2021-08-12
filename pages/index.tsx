import { Box, Button, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import AppContainer from '../components/AppContainer'
import useReactionData from '../hooks/useReactionData'
import { GoTelescope } from 'react-icons/go'
import DataTable from '../components/DataTable'
import { formatForDataTable } from '../util'

const Chart = dynamic(() => import('../components/Chart'), { ssr: false })

export default function Home() {

  const {
    data,
    isRunning,
    setIsRunning
  } = useReactionData(5000)

  return (
    <>
      <Head>
        <title>Telescope Chemistry</title>
        <meta name="description" content="Telescope chemistry reaction tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContainer>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          py={8}
        >
          <Stack
            direction='row'
            alignItems='center'
          >
            <Heading
              fontSize='md'
              fontWeight={500}
            >
              <Icon
                mt='-3px'
                mr='4px'
                as={GoTelescope}
              />
              Telescope
            </Heading>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
          >
            {isRunning && (
              <Text
                fontSize='sm'
                color='primary.accent3'
              >
                Running...
              </Text>
            )}
            <Button
              variant='success'
              isLoading={isRunning}
              onClick={() => setIsRunning(true)}
            >
              Start reaction
            </Button>
          </Stack>
        </Stack>
        <Stack direction={['column', 'column', 'row']}>
          <Box
            borderWidth='1px'
            borderRadius='md'
            flex='1 0 50%'
          >
            <DataTable data={formatForDataTable(data)} />
          </Box>
          <Box
            borderWidth='1px'
            borderRadius='md'
            flex='1 0 50%'
          >
            <Chart data={data} />
          </Box>
        </Stack>
      </AppContainer>
    </>
  )
}
