import React, { useEffect, useState } from 'react'
import { ScrollArea, Table, Group, Avatar, Stack, Text, Pagination } from '@mantine/core'

const CampaignDonations = (props) => {

    const { category, id } = props

    const [donations, setDonations] = useState<null | any>([])
    const [count, setCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const no_of_pages = Math.ceil(count / limit)

    const loadDonations = () => {
        
    }

    useEffect(() => {
        loadDonations()
    }, [page])
    return (
        <div>
            <Group position='right'>
                <Pagination total={no_of_pages} page={page} onChange={page => setPage(page)} />
            </Group>
            <ScrollArea my="xl">
                <Table verticalSpacing={16} fontSize="sm" striped>
                    <thead>
                        <tr>
                            <th className='custom-th'>Donor</th>
                            <th className='custom-th'>Token</th>
                            <th className='custom-th'>Amount</th>
                            <th className='custom-th'>Amount USD</th>
                            <th className='custom-th'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donations.map((don, i) => (
                                <tr key={`donation_${don?.donation?.id}`}>
                                    <td>{don?.donation?.donor}</td>
                                    <td>
                                        {
                                            don?.donation?.token === "near" ? (
                                                <Group>
                                                    <Avatar size="sm" />
                                                    <Stack spacing={-2}>
                                                        <Text size="sm" weight={600}>Near</Text>
                                                        <Text size="xs">Near</Text>
                                                    </Stack>
                                                </Group>
                                            ) : (
                                                <Group>
                                                    <Avatar src={don?.tokenmetadata?.icon} size="sm" />
                                                    <Stack spacing={-2}>
                                                        <Text size="sm" weight={600}>{don?.tokenmetadata?.name}</Text>
                                                        <Text size="xs">{don?.tokenmetadata?.symbol}</Text>
                                                    </Stack>
                                                </Group>
                                            )
                                        }
                                    </td>
                                    <td>
                                        {
                                            don.donation.token === "near" ? getReadableTokenBalance(don?.donation?.amount, 24) : getReadableTokenBalance(don?.donation?.amount, don?.tokenmetadata?.decimals)
                                        }
                                    </td>
                                    <td>
                                        <Group position='apart'>
                                            <Text size="sm">$</Text>
                                            <Text size="sm">{don.donation.amount_usd}</Text>
                                        </Group>
                                    </td>
                                    <td>{convertTimestamp(don.donation.created_at)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </ScrollArea>
            <Group position='right'>
                <Pagination total={no_of_pages} page={page} onChange={page => setPage(page)} />
            </Group>
        </div>
    )
}

export default CampaignDonations