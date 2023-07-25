import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import Container from './common/Container';
import Row from './common/Row';

const TopHeader = () => {
  return (
    <div>
    <Container className="mx-auto py-[37.5px]">
        <Row className="h-[34px] items-center justify-between">
      <HeaderLogo text="Studios" className='text-[28px]'/>
      <HeaderLinks />
      </Row>
      </Container>
      </div>
  );
};

export default TopHeader;