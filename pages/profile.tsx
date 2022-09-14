import Head from 'next/head'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import SectionTitle from '../components/SectionTitle'
import { appTitle } from '../src/config'

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profile - {appTitle}</title>
      </Head>

      <div className="min-h-screen">
        <SectionTitle first>Demo is coming soon</SectionTitle>
      </div>
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ProfilePage
