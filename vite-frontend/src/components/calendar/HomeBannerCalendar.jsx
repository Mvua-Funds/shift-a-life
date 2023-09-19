import { Center, Stack, SegmentedControl, Group, Paper, Text, useMantineTheme } from '@mantine/core'
import { IconCalendarEvent, IconSpeakerphone } from '@tabler/icons'
import React from 'react'
import { useState } from 'react';
import CampaignsCustomCalendar from './CampaignsCustomCalendar';
import EventsCustomCalendar from './EventsCustomCalendar';

const HomeBannerCalendar = () => {
    return (
        <Center className='h-100'>
            <Stack className='w-100' my="xl" spacing={16}>
                <SegmentedControl
                    fullWidth
                    radius="xl"
                    color="indigo"
                    value='campaigns'
                    data={[
                        {
                            label: (
                                <Group position='center'>
                                    <IconSpeakerphone />
                                    <Text>Campaigns</Text>
                                </Group>
                            ), value: 'campaigns'
                        },
                    ]}
                />
                <Paper p="xs" radius="lg">
                    <CampaignsCustomCalendar custom={false} allowdatechange={false} />
                </Paper>
            </Stack>
        </Center>
    )
}

export default HomeBannerCalendar