import { describe, expect, it, jest } from '@jest/globals'
import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import { ChangeMiningFeeComponent } from '../../components/scenes/ChangeMiningFeeScene'
import { getTheme } from '../../components/services/ThemeContext'
import { RouteProp } from '../../types/routerTypes'
import { fakeNavigation } from '../../util/fake/fakeNavigation'
import { fakeNonce } from '../../util/fake/fakeNonce'

describe('Change Mining Fees', () => {
  const nonce = fakeNonce(0)
  const onSubmit = jest.fn()
  const wallet: any = {
    currencyInfo: {
      defaultSettings: {
        customFeeSettings: ['satPerByte']
      }
    }
  }
  const guiMakeSpendInfo = {
    publicAddress: 'bitcoincash:qpltjkre069mp80ylcj87832ju3zt2gr6gercn9j2z',
    legacyAddress: '123412341234',
    nativeAmount: '100000',
    currencyCode: 'BCH',
    metadata: {}
  }
  const route: RouteProp<'changeMiningFee'> = {
    key: `changeMiningFee-${nonce()}`,
    name: 'changeMiningFee',
    params: { wallet, guiMakeSpendInfo, maxSpendSet: false, onSubmit }
  }

  it('should render with standard props', () => {
    const renderer = createRenderer()
    const element = (
      <ChangeMiningFeeComponent
        navigation={fakeNavigation}
        route={route}
        theme={getTheme()}
        // networkFeeOption="standard"
      />
    )
    expect(renderer.render(element)).toMatchSnapshot()
  })

  it('should render with high props', () => {
    const renderer = createRenderer()
    const element = (
      <ChangeMiningFeeComponent
        navigation={fakeNavigation}
        route={route}
        theme={getTheme()}
        // networkFeeOption="high"
      />
    )
    expect(renderer.render(element)).toMatchSnapshot()
  })

  it('should render with low props', () => {
    const renderer = createRenderer()
    const element = (
      <ChangeMiningFeeComponent
        navigation={fakeNavigation}
        route={route}
        theme={getTheme()}
        // networkFeeOption="low"
      />
    )
    expect(renderer.render(element)).toMatchSnapshot()
  })

  it('should render with custom props', () => {
    const renderer = createRenderer()
    const element = (
      <ChangeMiningFeeComponent
        navigation={fakeNavigation}
        route={route}
        theme={getTheme()}
        // networkFeeOption="custom"
      />
    )
    expect(renderer.render(element)).toMatchSnapshot()
  })
})
