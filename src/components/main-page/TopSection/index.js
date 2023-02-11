import React from 'react'
import { TopSectionBodyWrapper, TopSectionHeaderLogoWrapper, TopSectionHeaderNavbarWrapper, TopSectionHeaderWrapper, TopSectionWrapper } from '../wrappers'

const TopSection = () => {
  return (
    <TopSectionWrapper>
        <TopSectionHeaderWrapper className='d-flex'>
          <TopSectionHeaderLogoWrapper>
            <img src="kG.png" />
          </TopSectionHeaderLogoWrapper>
          <TopSectionHeaderNavbarWrapper>

          </TopSectionHeaderNavbarWrapper>
        </TopSectionHeaderWrapper>

        <TopSectionBodyWrapper>

        </TopSectionBodyWrapper>
    </TopSectionWrapper>
  )
}

export default TopSection