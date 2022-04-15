import { Grid } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../../components/layouts'

const FavoritesPage = () => {
  return (
    <Layout title='Favorites'>
        <Grid.Container gap={3}>
            <Grid xs={12} justify='center'>
                <h1>Favorites</h1>
            </Grid>
            <Grid>
            </Grid>

        </Grid.Container>

    </Layout>
  )
}

export default FavoritesPage