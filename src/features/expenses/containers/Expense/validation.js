import {validateCustomField} from '@/components/custom-field';
import {getError, isEmpty} from '@/constants';
import {EXPENSE_FIELDS as FIELDS} from '../../constants';

export const validate = values => {
  const errors: any = {expense: {}, customFields: {}};

  if (values) {
    errors['expense'][FIELDS.DATE] = getError(
      values?.['expense']?.[FIELDS.DATE],
      ['required']
    );

    errors['expense'][FIELDS.CATEGORY] = getError(
      values?.['expense']?.[FIELDS.CATEGORY],
      ['required']
    );

    errors['expense'][FIELDS.AMOUNT] = getError(
      values?.['expense']?.[FIELDS.AMOUNT],
      ['required', 'isNumberFormat']
    );

    const fieldErrors = validateCustomField(values?.customFields);
    !isEmpty(fieldErrors) && (errors.customFields = fieldErrors);
  }

  return errors;
};
