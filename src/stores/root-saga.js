import {all, takeEvery, select} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/src/constants';

import auth from '@/features/authentication/saga';
import invoices from '@/features/invoices/saga';
import estimates from '@/features/estimates/saga';
import customers from '@/features/customers/saga';
import expenses from '@/features/expenses/saga';
import payments from '@/features/payments/saga';
import settings from '@/features/settings/saga';
import more from '@/features/more/saga';
import company from 'stores/company/saga';
import roles from 'stores/roles/saga';
import users from 'stores/users/saga';
import customizes from 'stores/customize/saga';
import paymentModes from 'stores/payment-modes/saga';
import itemUnits from 'stores/item-units/saga';
import commonSaga from 'stores/common/saga';
import recurringInvoices from './recurring-invoices/saga';
import {PermissionService} from '@/services';

export default function* rootSaga() {
  yield takeEvery(REHYDRATE, function* boot() {
    const reduxStore = yield select();
    const abilities = reduxStore?.common?.abilities;
    PermissionService.setPermissions(abilities);

    yield all([
      auth(),
      invoices(),
      estimates(),
      customers(),
      more(),
      expenses(),
      payments(),
      settings(),
      company(),
      roles(),
      users(),
      customizes(),
      paymentModes(),
      itemUnits(),
      recurringInvoices(),
      commonSaga()
    ]);
  });
}
