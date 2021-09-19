import React, { ReactNode } from 'react'
import { ThemeUIStyleObject, Grid, Text } from 'theme-ui'

export interface BorderWrapperProps {
  sx?: ThemeUIStyleObject
  title: string
  children: ReactNode
}
export const BorderWrapper = ({
  sx,
  title,
  children,
}: BorderWrapperProps): JSX.Element => {
  return (
    <Grid
      sx={{
        alignItems: 'center',
        justifyItems: 'center',
        border: '1px solid',
        borderRadius: 8,
        borderColor: 'rgb(240, 243, 247)',
        backgroundColor: '#ffff',
        boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 2px 0px',
        maxWidth: '500px',
        width: 'auto',
        margin: '0 auto',
        mt: 7,
        p: [2, 4],
        ...sx,
      }}
    >
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
          color: '#4B4A4A',
          mb: 4,
          mt: 4,
        }}
      >
        {title}
      </Text>
      {children}
    </Grid>
  )
}
