import { Button, Container, Grid, LoadingOverlay, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { APP_NAME, SEPARATOR } from '../../configs/appconfig'
import { contract } from '../../utils/config'

const CreateCause = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm({
        initialValues: {
            cause: ""
        },
        validate: {
            cause: value => value === "" ? "Cause is required" : null
        }
    })

    async function handleSubmit() {
        const accounts = await window?.ethereum?.request({ method: "eth_requestAccounts" });
        const account = accounts[0];

        setLoading(true)
        contract?.methods?.addCause(form.values.cause)
            .send({ from: account }).then(res => {
                console.log(res)
            }).catch(e => {
                console.log('Error', e)
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Helmet>
                <title>{`Register a new Cause ${SEPARATOR} ${APP_NAME}`}</title>
            </Helmet>

            <div>
                <Container style={{
                    position: "relative"
                }}>
                    <LoadingOverlay visible={loading} />
                    <Grid>
                        <Grid.Col md={6} offsetMd={3}>
                            <form onSubmit={form.onSubmit(values => handleSubmit())}>
                                <Stack>
                                    <TextInput label="Enter Cause" {...form.getInputProps('cause')} radius={'md'} />
                                    <Button type='submit'>Add Cause</Button>
                                </Stack>
                            </form>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default CreateCause