import {getItem, updateItem} from '../../src/repositories/dynamo.repository';

it('should read user 1', async () => {
  const user = await getItem(1);
  expect(user).toEqual({
    id: 1,
    cash: 1000000,
    holdings: [
      {amount: 100, coinId: 80},
      {amount: 200, coinId: 90},
    ],
    name: 'Dr. Evil',
  });
});

it('should update user 1', async () => {
  const user = await updateItem({
    id: 2,
    cash: 1000000,
    holdings: [
      {amount: 100, coinId: 80},
      {amount: 200, coinId: 90},
    ],
    name: 'Dr. No',
  });


  const updatedUser = await getItem(2);
  expect(updatedUser).toEqual({
    id: 2,
    cash: 1000000,
    holdings: [
      {amount: 100, coinId: 80},
      {amount: 200, coinId: 90},
    ],
    name: 'Dr. No',
  });
});
