import { DatePicker, DatePickerProps, Radio, RadioChangeEvent } from 'antd';
import moment from 'moment';
import { FC, useState } from 'react';

type Props = {
  format?: string;
  placeholder?: string;
};

type PickerType =
  | 'time'
  | 'date'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year'
  | undefined;

const CalendarPicker: FC<Props> = ({
  format = 'DD/MM/YYYY',
  placeholder = 'dd/mm/yy',
}) => {
  const [value, setValue] = useState<PickerType>('date');

  const onChangePickerType = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <DatePicker
        showToday={value !== undefined ? false : undefined}
        picker={value}
        placeholder={placeholder}
        format={format}
        renderExtraFooter={() => (
          <Radio.Group className="" onChange={onChangePickerType} value={value}>
            <Radio value="date" style={{ fontSize: '14px' }}>
              Theo ngày
            </Radio>
            <Radio value="week" style={{ fontSize: '14px' }}>
              Theo tuần
            </Radio>
          </Radio.Group>
        )}
      />
    </div>
  );
};

export default CalendarPicker;
