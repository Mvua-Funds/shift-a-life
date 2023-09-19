import React, { useState, useEffect } from 'react'
import { Button, Group, Modal, Paper, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { getTheme } from '../../configs/appfunctions';
import bodyStyles from '../styles/bodyStyles';
import { Loader } from '@mantine/core';

const BecomePartnerModal = (props) => {

    const { partners_, method, id } = props

    const [partners, setPartners] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const { theme, classes } = bodyStyles()

    const loadUserPartners = () => {
    }

    const registerPartner = (partner) => {
        
    }

    const checkIfExists = (name) => {
        return partners_?.some((x) => x.name === name);
    }

    useEffect(() => {
        loadUserPartners()
    }, [])
    return (
        <>
            <Button radius="xl" color="indigo" my="xl" onClick={() => setModalOpen(true)}>Become partner</Button>
            <Modal radius="lg" title="Register as a partner" opened={modalOpen} onClose={() => setModalOpen(false)}
                styles={{
                    modal: {
                        background: getTheme(theme) ? theme.colors.dark[9] : "#d3d6e9"
                    }
                }}
                overlayBlur={2}
                overlayOpacity={0.3} overflow="inside">
                <Text size="sm" className={classes.text}>
                    When become a partner you get a chance to be voted and if you become the top most partner,
                    you get a chance to effect this project. This means you are going to run the project as per the
                    project aim and description.
                </Text>

                <Stack spacing={4} my="xl">
                    {
                        partners.map((partner, i) => (
                            <Paper key={`partner_${i}`} radius="md" p="md" sx={{
                                background: getTheme(theme) ? theme.colors.dark[6] : theme.colors.gray[0]
                            }}>
                                <Group align="center" position="apart">
                                    <Title order={4} weight={400} className={classes.text}>{partner?.name}</Title>
                                    <Button size='sm' radius="xl"
                                        color="indigo"
                                        onClick={() => registerPartner(partner?.id)}
                                        rightIcon={loading ? <Loader size={16} color="white" /> : null}
                                        disabled={checkIfExists(partner?.name)}>
                                        {
                                            checkIfExists(partner?.name) ? "Aready registered" : "Register"
                                        }
                                    </Button>
                                </Group>
                            </Paper>
                        ))
                    }
                </Stack>

            </Modal>
        </>
    )
}

export default BecomePartnerModal