import { describe, expect, it } from '@jest/globals'
import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import { DefaultFiatSettingComponent } from '../../components/scenes/DefaultFiatSettingScene'
import { getTheme } from '../../components/services/ThemeContext'
import { fakeNavigation } from '../../util/fake/fakeNavigation'

describe('DefaultFiatSettingComponent', () => {
  it('should render with loading props', () => {
    const renderer = createRenderer()

    const actual = renderer.render(
      <DefaultFiatSettingComponent
        navigation={fakeNavigation}
        supportedFiats={[
          {
            label: 'Dollars',
            value: 'USD'
          }
        ]}
        onSelectFiat={selectedDefaultFiat => undefined}
        theme={getTheme()}
      />
    )

    expect(actual).toMatchSnapshot()
  })
})
