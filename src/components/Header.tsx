import React from 'react'
import { Input, Select } from 'antd';
import type { GetProps } from 'antd';

// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;

  return (
    <div className='h-20 flex items-center justify-center gap-4'>
      <Search placeholder="input search text" style={{ width: 200 }} />
      <Select defaultValue="lucy" options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
        style={{ width: 120 }}

      />
    </div>
  )
}

export default Header