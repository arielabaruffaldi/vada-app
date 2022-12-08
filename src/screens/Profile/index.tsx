import Button from '@atoms/Button'
import Text from '@atoms/Text'
import ImageSelector from '@molecules/ImageSelector'
import Layout from '@organisms/Layout'
import React, { FC } from 'react'

const Profile: FC = () => {
  const profileImage = 'testurl'
  console.log('profileImage----', profileImage)

  const handleOnImage = (uri: string) => {
    console.log('URI---', uri)
  }

  return (
    <Layout>
      <Text> Profile </Text>
    </Layout>
  )
}

export default Profile
